import React from "react";
import styled from "styled-components";
import playAgainImg from "../../images/post/V_PlayAgain_button.png";

const PlayAgainButton = styled.img`
  height: 10vh;
  overflow: hidden;
  &:active {
    opacity: 40%;
  }
  :focus {
    outline: 0;
  }
  margin-bottom: -5px;
`;

export default () => {
  return (
    <PlayAgainButton src={playAgainImg} alt="Play again"></PlayAgainButton>
  );
};
