import React from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

import controlWheelImg from "../../images/match/swipewheel_icon.png";
import ballistaLoaded from "../../images/match/ballista_load.png";
import ballistaShot from "../../images/match/ballista_shoot.png";
import { useStateValue } from "../../store/StateContext";
import SendAirConsole from "../AirConsoleHandler";
import { RateLimiter } from "../../rate-limiter";

var rateLimiter = new RateLimiter(window.airconsole);
const wheelSize = 60;

const Wrapper = styled.div`
  /*   margin-top: 100px; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /*   background-color: gray; */
  opacity: 60%;
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
`;
const BallistaImage = styled.img`
  position: absolute;
  margin-left: 30%;
  margin-top: 30%;
  width: 40%;
  transform: [{rotate:'${(props) => props.rotationEuler}deg'}];

  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
const WheelImage = styled.img`
  height: 90%;
  margin-left: 5%;
  margin-right: 95%;
  padding-top: 5%;
  padding-bottom: 75%;

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
  const [{ menu, match }] = useStateValue();
  var ballista_rotation = 0;
  const swipeHandlers = useSwipeable({
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
      rest["rotationEuler"] = ballista_rotation;
      rateLimiter.message(window.airconsole.SCREEN, rest);
      //console.log("Coordinates: " + rect.left + "px, " + rect.top + "px");
      console.log("Angle: " + ballista_rotation);
      //console.log({ endPointCenteredX, endPointCenteredY });
    },
  });
  return (
    <Wrapper {...swipeHandlers}>
      <ControlWheelBackground bckgColor={menu.playerColor} id="controlWheel">
        <BallistaImage
          src={match.ballista_loaded ? ballistaLoaded : ballistaShot}
          alt="ballista"
          rotationEuler={ballista_rotation}
        />
        <WheelImage src={controlWheelImg} alt="controlWheel"></WheelImage>
      </ControlWheelBackground>
    </Wrapper>
  );
}

export default ControlWheel;
