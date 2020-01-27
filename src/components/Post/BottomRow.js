import React from "react";
import styled from "styled-components";

import crownYellow from "../../images/post/DV_crown_GAINED_icon.png";
import crownWhite from "../../images/post/DV_crown_icon.png";

import { useStateValue } from "../../store/StateContext";
import { ACHIEVEMENTS } from "./constants";

const BottomRow = styled.div`
  z-index: 1;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 90vw;
  color: "white";
`;

const Number = styled.span`
  color: "#FFFFFF";
  font-size: 1.6rem;
  font-weight: 1000;
`;

const Crown = styled.img`
  height: 1rem;
`;

const Text = styled.span`
  color: "#FFFFFF";
  font-size: 1.2rem;
  font-weight: 1000;
`;

export default () => {
  const [{ post }] = useStateValue();

  var rewardDelta = "";
  if (post.selectedScore > 0) {
    if (post.scores.length > 0) {
      rewardDelta = post.scores[post.selectedScore].rewardDelta;
    } else {
      rewardDelta = ACHIEVEMENTS[post.selectedScore].rewardDelta;
    }
  }

  return (
    <BottomRow>
      <Number>
        <Crown src={crownYellow}></Crown> {post.totalScore}
      </Number>
      <Number>
        <Crown src={crownWhite}></Crown> {rewardDelta}
      </Number>
      <Text>{post.playAgain ? "waiting..." : "play again"}</Text>
    </BottomRow>
  );
};
