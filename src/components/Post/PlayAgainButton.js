import React from "react";
import styled from "styled-components";
import playAgainImg from "../../images/post/V_PlayAgain_button.png";
import { useStateValue } from "../../store/StateContext";

const PlayAgainButton = styled.img`
  width: 70vw;
  overflow: hidden;
`;

export default () => {
  const [{ post }] = useStateValue();
  return (
    <PlayAgainButton src={playAgainImg} alt="Play again"></PlayAgainButton>
  );
};
