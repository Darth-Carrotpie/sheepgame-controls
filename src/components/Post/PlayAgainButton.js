import React from "react";
import styled from "styled-components";
import playAgainImg from "../../images/post/V_PlayAgain_button.png";

const PlayAgainButton = styled.img`
  width: 70vw;
  overflow: hidden;
`;

export default () => {
  return (
    <PlayAgainButton src={playAgainImg} alt="Play again"></PlayAgainButton>
  );
};
