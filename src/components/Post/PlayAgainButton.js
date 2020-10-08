import React from "react";
import styled from "styled-components";
import playAgainImg from "../../images/post/V_PlayAgain_button.png";

const PlayAgainButton = styled.img`
  width: 70vw;
  overflow: hidden;
  //fix this after changing to svg. this doesnt work anyways ATM
  &:active {
    opacity: 40%;
  }
`;

export default () => {
  return (
    <PlayAgainButton src={playAgainImg} alt="Play again"></PlayAgainButton>
  );
};
