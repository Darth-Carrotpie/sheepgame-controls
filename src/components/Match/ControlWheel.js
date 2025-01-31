import React, { useState } from 'react';
import styled from 'styled-components';

import ControlWheelVec from './Vectors/ArrowsVector';
import { useStateValue } from '../../store/StateContext';
import SendAirConsole from '../AirConsoleHandler';
import { RateLimiter } from '../../rate-limiter';
import Sheep from '../Upgrade/Sheep';
import BallistaLoaded from './Vectors/BallistaLoaded';
import BallistEmpty from './Vectors/BallistaEmpty';

var rateLimiter = new RateLimiter(window.airconsole);
var ballista_rotation = 0;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ControlWheelBackground = styled.div`
  height: 90vw;
  width: 90vw;
  max-height: 55vh;
  max-width: 55vh;
  background-color: ${(props) => (props.bckgColor ? props.bckgColor : 'red')};
  border-radius: 50%;
  position: relative;
  opacity: 60%;
`;

const BallistaImage = styled.div`
  position: absolute;
  height: 25%;
  width: 40%;

  -webkit-transform: rotate(${(props) => -props.rotationEuler}deg);
  -moz-transform: rotate(${(props) => -props.rotationEuler}deg);
  -o-transform: rotate(${(props) => -props.rotationEuler}deg);
  -ms-transform: rotate(${(props) => -props.rotationEuler}deg);
  transform: rotate(${(props) => -props.rotationEuler}deg);

  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
`;
const SheepContainer = styled.div`
  position: absolute;
  height: 25%;
  width: 25%;
  pointer-events: none;
`;
const WheelImage = styled.div`
  height: 90%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
function euler_angle(x, y) {
  var rad = Math.atan(y / x); // arcus tangent in radians
  var deg = (rad * 180) / Math.PI; // converted to degrees
  if (x < 0) deg += 180; // fixed mirrored angle of arctan
  var eul = (270 + deg) % 360; // folded to [0,360) domain
  return Math.floor(eul);
}
function FillDataToSend(eventData, setRotation, isDown, location, eventName) {
  var dataToSend = {};
  dataToSend['element'] = eventName;
  dataToSend['clicked'] = isDown;
  const offsetTop = document
    .getElementById('controlWheelImage')
    .getBoundingClientRect().top;
  const offsetLeft = document
    .getElementById('controlWheelImage')
    .getBoundingClientRect().left;
  const elementWidth = document.getElementById('controlWheelImage').clientWidth;
  const endPointCenteredX = location.x - elementWidth / 2.0 - offsetLeft;
  const endPointCenteredY = offsetTop - location.y + elementWidth / 2.0;

  dataToSend['endPointCentered'] = [endPointCenteredX, endPointCenteredY];
  ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
  dataToSend['rotationEuler'] = ballista_rotation;
  setRotation(ballista_rotation);
  dataToSend['elementWidth'] = elementWidth;
  return dataToSend;
}
function SendMessage(eventData, setRotation, isDown, location) {
  SendAirConsole(
    FillDataToSend(eventData, setRotation, isDown, location, 'tap')
  );
}
function OnTouchStart(eventdata, setRotation) {
  const firstTouchEvent = eventdata.touches[0];
  const location = {
    x: firstTouchEvent.clientX,
    y: firstTouchEvent.clientY,
  };
  SendMessage(eventdata, setRotation, true, location);
}
function OnTouchMove(eventdata, setRotation) {
  const firstTouchEvent = eventdata.touches[0];
  const location = {
    x: firstTouchEvent.clientX,
    y: firstTouchEvent.clientY,
  };
  var data = FillDataToSend(eventdata, setRotation, true, location, 'swipe');
  rateLimiter.message(window.airconsole.SCREEN, data);
}
function OnTouchEnd(eventdata, setRotation) {
  const firstTouchEvent = eventdata.changedTouches[0];
  const location = {
    x: firstTouchEvent.clientX, //get the location of the end of the touch
    y: firstTouchEvent.clientY,
  };
  SendMessage(eventdata, setRotation, false, location);
}

function ControlWheel() {
  const [{ menu, match, global }] = useStateValue();
  const [rotation, setRotation] = useState(0);
  return (
    <Wrapper>
      <ControlWheelBackground bckgColor={menu.playerColor} id="controlWheel">
        <WheelImage
          id="controlWheelImage"
          alt="controlWheel"
          onTouchStart={(e) => OnTouchStart(e, setRotation)}
          onTouchMove={(e) => OnTouchMove(e, setRotation)}
          onTouchEnd={(e) => OnTouchEnd(e, setRotation)}
        >
          <ControlWheelVec color={global.backgroundColor} />
        </WheelImage>
      </ControlWheelBackground>
      <BallistaImage alt="ballista" rotationEuler={rotation}>
        {match.ballista_loaded ? <BallistaLoaded /> : <BallistEmpty />}
      </BallistaImage>
      <SheepContainer>
        <Sheep
          selectedSheep={match.currentUpgradeIcon}
          color={menu.playerColor}
        ></Sheep>
      </SheepContainer>
    </Wrapper>
  );
}

export default ControlWheel;
