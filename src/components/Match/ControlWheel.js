import React, { useState } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';

import ControlWheelVec from './Vectors/ArrowsVector';
import { useStateValue } from '../../store/StateContext';
import SendAirConsole from '../AirConsoleHandler';
import { RateLimiter } from '../../rate-limiter';
import Sheep from '../Upgrade/Sheep';
import BallistaLoaded from './Vectors/BallistaLoaded';
import BallistEmpty from './Vectors/BallistaEmpty';

var rateLimiter = new RateLimiter(window.airconsole);
const wheelSize = 60;
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
function SendMessage(eventData, setRotation, isDown, location) {
  var dataToSend = {};
  dataToSend['element'] = 'tap';
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
  SendAirConsole(dataToSend);
}
function OnTouchStart(eventdata, setRotation) {
  const firstTouchEvent = eventdata.touches[0];
  const location = {
    x: firstTouchEvent.clientX,
    y: firstTouchEvent.clientY,
  };
  SendMessage(eventdata, setRotation, true, location);
}
function OnTouchEnd(eventdata, setRotation) {
  const firstTouchEvent = eventdata.changedTouches[0];
  const location = {
    x: firstTouchEvent.clientX, //get the location of the end of the touch
    y: firstTouchEvent.clientY,
  };
  SendMessage(eventdata, setRotation, false, location);
}
function getStartRelative(rest) {
  const elementWidth = document.getElementById('controlWheelImage').clientWidth;
  var div = document.getElementById('controlWheelImage');
  var rect = div.getBoundingClientRect();
  var x = rest['initial'][0] - rect.left - elementWidth / 2.0;
  var y = rect.top + elementWidth / 2.0 - rest['initial'][1];
  return [x, y];
}
function ControlWheel() {
  const [{ menu, match, global }] = useStateValue();
  const [rotation, setRotation] = useState(0);
  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      const { event, ...rest } = eventData;
      rest['element'] = 'swipe';
      rest['isDelta'] = 'False';
      rest['startRelative'] = getStartRelative(rest);

      const endPointCenteredX = rest['startRelative'][0] - rest['deltaX'];
      const endPointCenteredY = rest['startRelative'][1] + rest['deltaY'];
      rest['endPointCentered'] = [endPointCenteredX, endPointCenteredY];
      ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
      rest['rotationEuler'] = ballista_rotation;
      setRotation(ballista_rotation);
      rest['elementWidth'] = document.getElementById(
        'controlWheelImage'
      ).clientWidth;
      SendAirConsole(rest);
    },
    onSwiping: (eventData) => {
      const { event, ...rest } = eventData;
      rest['element'] = 'swipe';
      rest['isDelta'] = 'True';
      rest['startRelative'] = getStartRelative(rest);
      const endPointCenteredX = rest['startRelative'][0] - rest['deltaX'];
      const endPointCenteredY = rest['startRelative'][1] + rest['deltaY'];
      rest['endPointCentered'] = [endPointCenteredX, endPointCenteredY];
      ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
      setRotation(ballista_rotation);
      rest['rotationEuler'] = ballista_rotation;
      rest['elementWidth'] = document.getElementById(
        'controlWheelImage'
      ).clientWidth;
      rateLimiter.message(window.airconsole.SCREEN, rest);
    },
    delta: 2,
    trackMouse: true,
  });
  return (
    <Wrapper {...swipeHandlers}>
      <ControlWheelBackground bckgColor={menu.playerColor} id="controlWheel">
        <WheelImage
          id="controlWheelImage"
          alt="controlWheel"
          //onClick={(e) => SendMessage(e, setRotation)}
          onTouchStart={(e) => OnTouchStart(e, setRotation)}
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
