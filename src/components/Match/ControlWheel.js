import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

import controlWheelImg from "../../images/match/swipewheel_icon.png";
import ballistaLoaded from "../../images/match/ballista_load.png";
import ballistaShot from "../../images/match/ballista_shoot.png";
import { useStateValue } from "../../store/StateContext";
import SendAirConsole from "../AirConsoleHandler";
import { RateLimiter } from "../../rate-limiter";
import Sheep from "../Upgrade/Sheep";

var rateLimiter = new RateLimiter(window.airconsole);
const wheelSize = 60;
var ballista_rotation = 0;

const Wrapper = styled.div`
  /*   margin-top: 100px; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /*   background-color: gray; */
`;

const ControlWheelBackground = styled.div`
  height: 90vw;
  width: 90vw;
  max-height: 55vh;
  max-width: 55vh;
  /*   height: ${wheelSize}vh; */
  /*   width: 100%; */
  background-color: ${(props) => (props.bckgColor ? props.bckgColor : "red")};
  border-radius: 50%;
  position: relative;
  /*   opacity: 50%; */

  /*&:active {
    filter: brightness(50%);
    opacity: 100%;
  }*/
  opacity: 60%;
`;

//transform: rotate(${(props) => props.rotationEuler}deg);
//transform: rotate(${ballista_rotation}deg);
const BallistaImage = styled.img`
  position: absolute;
  width: 40%;
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
const WheelImage = styled.img`
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
  dataToSend["element"] = "tap";
  dataToSend["clicked"] = isDown;
  //console.log("clientX: " + eventData.nativeEvent.offsetX);
  //console.log("clientY: " + eventData.nativeEvent.offsetY);
  const offsetTop = document
    .getElementById("controlWheelImage")
    .getBoundingClientRect().top;
  const offsetLeft = document
    .getElementById("controlWheelImage")
    .getBoundingClientRect().left;
  const elementWidth = document.getElementById("controlWheelImage").clientWidth;
  //const endPointCenteredX = eventData.nativeEvent.offsetX - elementWidth / 2.0;
  const endPointCenteredX = location.x - elementWidth / 2.0 - offsetLeft;
  //const endPointCenteredY = -eventData.nativeEvent.offsetY + elementWidth / 2.0;
  const endPointCenteredY = offsetTop - location.y + elementWidth / 2.0;
  /*   console.log(
    " elementWidth:   " +
      elementWidth +
      "  topOffset: " +
      offsetTop +
      "  location: " +
      location.y +
      " tot: " +
      endPointCenteredY
  ); */
  dataToSend["endPointCentered"] = [endPointCenteredX, endPointCenteredY];
  ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
  dataToSend["rotationEuler"] = ballista_rotation;
  //console.log({ endPointCenteredX, endPointCenteredY });
  //console.log(ballista_rotation);
  setRotation(ballista_rotation);
  dataToSend["elementWidth"] = elementWidth;
  SendAirConsole(dataToSend);
}
function OnTouchStart(eventdata, setRotation) {
  const firstTouchEvent = eventdata.touches[0];
  //console.log(firstTouchEvent);
  const location = {
    x: firstTouchEvent.clientX,
    y: firstTouchEvent.clientY,
  };
  SendMessage(eventdata, setRotation, true, location);
}
function OnTouchEnd(eventdata, setRotation) {
  const firstTouchEvent = eventdata.changedTouches[0];
  //console.log(firstTouchEvent);
  const location = {
    x: firstTouchEvent.clientX, //get the location of the end of the touch
    y: firstTouchEvent.clientY,
  };
  SendMessage(eventdata, setRotation, false, location);
}
function getStartRelative(rest) {
  const elementWidth = document.getElementById("controlWheelImage").clientWidth;
  var div = document.getElementById("controlWheelImage");
  var rect = div.getBoundingClientRect();
  var x = rest["initial"][0] - rect.left - elementWidth / 2.0;
  var y = rect.top + elementWidth / 2.0 - rest["initial"][1];
  return [x, y];
}
function ControlWheel() {
  const [{ menu, match }] = useStateValue();
  const [rotation, setRotation] = useState(0);
  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      const { event, ...rest } = eventData;
      rest["element"] = "swipe";
      rest["isDelta"] = "False";
      rest["startRelative"] = getStartRelative(rest);

      const endPointCenteredX = rest["startRelative"][0] - rest["deltaX"];
      const endPointCenteredY = rest["startRelative"][1] + rest["deltaY"];
      rest["endPointCentered"] = [endPointCenteredX, endPointCenteredY];
      ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
      rest["rotationEuler"] = ballista_rotation;
      setRotation(ballista_rotation);
      rest["elementWidth"] = document.getElementById(
        "controlWheelImage"
      ).clientWidth;
      SendAirConsole(rest);
    },
    onSwiping: (eventData) => {
      const { event, ...rest } = eventData;
      rest["element"] = "swipe";
      rest["isDelta"] = "True";
      rest["startRelative"] = getStartRelative(rest);
      const endPointCenteredX = rest["startRelative"][0] - rest["deltaX"];
      const endPointCenteredY = rest["startRelative"][1] + rest["deltaY"];
      rest["endPointCentered"] = [endPointCenteredX, endPointCenteredY];
      ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
      setRotation(ballista_rotation);
      rest["rotationEuler"] = ballista_rotation;
      rest["elementWidth"] = document.getElementById(
        "controlWheelImage"
      ).clientWidth;
      rateLimiter.message(window.airconsole.SCREEN, rest);
      //console.log("Coordinates: " + rect.left + "px, " + rect.top + "px");
      //console.log({ endPointCenteredX, endPointCenteredY });
    },
    delta: 2,
    trackMouse: true,
  });
  return (
    <Wrapper {...swipeHandlers}>
      <ControlWheelBackground bckgColor={menu.playerColor} id="controlWheel">
        <WheelImage
          id="controlWheelImage"
          src={controlWheelImg}
          alt="controlWheel"
          //onClick={(e) => SendMessage(e, setRotation)}
          onTouchStart={(e) => OnTouchStart(e, setRotation)}
          onTouchEnd={(e) => OnTouchEnd(e, setRotation)}
        ></WheelImage>
      </ControlWheelBackground>
      <BallistaImage
        src={match.ballista_loaded ? ballistaLoaded : ballistaShot}
        alt="ballista"
        rotationEuler={rotation}
      />
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
