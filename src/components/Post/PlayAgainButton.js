import React from "react";
import styled from "styled-components";
import playAgainImg from "../../images/post/V_PlayAgain_button.png";
import { useStateValue } from "../../store/StateContext";

const PlayAgainButton = styled.img`
  width: 70vw;
  overflow: hidden;
`;
function OnClickReady() {
  var data = { element: "playAgain", pressed: true };
  window.airconsole.message(window.airconsole.SCREEN, data);
}
export default () => {
  const [{ post }] = useStateValue();
  return (
    <PlayAgainButton
      src={playAgainImg}
      onClick={OnClickReady}
      alt="Play again"
    ></PlayAgainButton>
  );
};
