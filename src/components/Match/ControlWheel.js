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

  &:active {
    filter: brightness(50%);
  }
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
`;
const SheepContainer = styled.div`
  position: absolute;
  width: 25%;
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

function ControlWheel() {
  var ballista_rotation = 0;
  const [{ menu, match }] = useStateValue();
  const [rotation, setRotation] = useState(0);
  const swipeHandlers = useSwipeable({
    onTap: (eventData) => {
      const { event, ...rest } = eventData;
      console.log("tap: " + rest);
      return;
      rest["element"] = "swipe";
      rest["clicked"] = "false";
      rest["startRelative"] = [,];
      const elementWidth = document.getElementById("controlWheel").clientWidth;
      var div = document.getElementById("controlWheel");
      var rect = div.getBoundingClientRect();
      rest["startRelative"][0] =
        rest["initial"][0] - rect.left - elementWidth / 2.0;
      rest["startRelative"][1] =
        rect.top + elementWidth / 2.0 - rest["initial"][1];
      const endPointCenteredX = rest["startRelative"][0] - rest["deltaX"];
      const endPointCenteredY = rest["startRelative"][1] + rest["deltaY"];
      ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
      rest["rotationEuler"] = ballista_rotation;
      SendAirConsole(rest);
    },
    onSwiped: (eventData) => {
      const { event, ...rest } = eventData;
      rest["element"] = "swipe";
      rest["clicked"] = "false";
      rest["startRelative"] = [,];
      const elementWidth = document.getElementById("controlWheel").clientWidth;
      var div = document.getElementById("controlWheel");
      var rect = div.getBoundingClientRect();
      rest["startRelative"][0] =
        rest["initial"][0] - rect.left - elementWidth / 2.0;
      rest["startRelative"][1] =
        rect.top + elementWidth / 2.0 - rest["initial"][1];
      const endPointCenteredX = rest["startRelative"][0] - rest["deltaX"];
      const endPointCenteredY = rest["startRelative"][1] + rest["deltaY"];
      ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
      rest["rotationEuler"] = ballista_rotation;
      SendAirConsole(rest);
    },
    onSwiping: (eventData) => {
      const { event, ...rest } = eventData;
      rest["element"] = "swipe";
      rest["clicked"] = "true";
      const elementWidth = document.getElementById("controlWheel").clientWidth;
      var div = document.getElementById("controlWheel");
      var rect = div.getBoundingClientRect();
      rest["startRelative"] = [,];
      rest["startRelative"][0] =
        rest["initial"][0] - rect.left - elementWidth / 2.0;
      rest["startRelative"][1] =
        rect.top + elementWidth / 2.0 - rest["initial"][1];
      const endPointCenteredX = rest["startRelative"][0] - rest["deltaX"];
      const endPointCenteredY = rest["startRelative"][1] + rest["deltaY"];
      ballista_rotation = euler_angle(endPointCenteredX, endPointCenteredY);
      setRotation(ballista_rotation);
      rest["rotationEuler"] = ballista_rotation;
      rateLimiter.message(window.airconsole.SCREEN, rest);
      //console.log("Coordinates: " + rect.left + "px, " + rect.top + "px");
      //console.log({ endPointCenteredX, endPointCenteredY });
    },
  });
  return (
    <Wrapper {...swipeHandlers}>
      <ControlWheelBackground bckgColor={menu.playerColor} id="controlWheel">
        <WheelImage src={controlWheelImg} alt="controlWheel"></WheelImage>
      </ControlWheelBackground>
      <BallistaImage
        src={match.ballista_loaded ? ballistaLoaded : ballistaShot}
        alt="ballista"
        rotationEuler={rotation}
      />
      <SheepContainer>
        <Sheep
          selectedSheep={match.selectedUpgradeIcon}
          color={menu.playerColor}
        ></Sheep>
      </SheepContainer>
    </Wrapper>
  );
}

export default ControlWheel;
