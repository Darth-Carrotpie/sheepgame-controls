import React from "react";
import styled from "styled-components";

import CrownsTypography from "../../components/Menu/CrownsTypography";

import { useStateValue } from "../../store/StateContext";
import { ACHIEVEMENTS } from "./constants";
import SendAirConsole from "../AirConsoleHandler";

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

const Text = styled.span`
  color: "#FFFFFF";
  font-size: 1.2rem;
  font-weight: 1000;
`;
function OnClickPlay() {
  var data = { element: "playAgain", pressed: true };
  console.log("data send:", data);
  SendAirConsole(data);
}
export default () => {
  const [{ match, post }] = useStateValue();

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
      <CrownsTypography isYellow={true} text={match.crowns}></CrownsTypography>
      <CrownsTypography isYellow={false} text={reward}></CrownsTypography>
      <Text onClick={OnClickPlay} style={{ marginTop: "5px" }}>
        {post.playAgain ? "waiting..." : "play again"}
      </Text>
    </BottomRow>
  );
};
