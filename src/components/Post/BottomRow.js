import React from "react";
import styled from "styled-components";

import crownYellow from "../../images/post/DV_crown_GAINED_icon.png";
import crownWhite from "../../images/post/DV_crown_icon.png";

import { useStateValue } from "../../store/StateContext";
import { ACHIEVEMENTS } from "./constants";

const BottomRow = styled.div`
  z-index: 1;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
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
function OnClickPlay() {
  var data = { element: "playAgain", pressed: true };
  console.log("data send:", data);
  window.airconsole.message(window.airconsole.SCREEN, data);
}
export default () => {
  const [{ menu, post }] = useStateValue();

  var reward = "";
  if (post.selectedScore > 0) {
    if (post.scores.length > 0) {
      reward = post.scores[post.selectedScore - 1].reward;
    } else {
      reward = ACHIEVEMENTS[post.selectedScore].total;
    }
  } else {
    reward = post.totalScore;
  }

  return (
    <BottomRow>
      <Number>
        <Crown src={crownYellow}></Crown> {menu.crowns}
      </Number>
      <Number>
        <Crown src={reward ? crownWhite : ""}></Crown> {reward ? reward : ""}
      </Number>
      <Text onClick={OnClickPlay} style={{ marginTop: "5px" }}>
        {post.playAgain ? "waiting..." : "play again"}
      </Text>
    </BottomRow>
  );
};
