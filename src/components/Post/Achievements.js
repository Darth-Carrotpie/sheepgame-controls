import React, { useState } from "react";
import styled from "styled-components";

import FlexColumn from "../Layout/FlexColumn";
import FlexRow from "../Layout/FlexRow";
import { Description } from "./Description";

import * as achievementIcons from "../../images/post/achievement_icons";
import { ACHIEVEMENTS } from "./constants";

import { useStateValue } from "../../store/StateContext";
import NerisBlack from "../../fonts/NerisBlack.otf";
import { selectScoreInfo } from "../../store/actions";

const Icon = styled.img`
  height: 35px;
  width: 35px;
  border: 3px solid;
  border-color: ${({ win, selected }) => borderColorChooser(win, selected)};
  border-radius: 100%;
  box-sizing: border-box;
  box-shadow: none;
`;
const borderColorChooser = (win, selected) => {
  if (win && selected) return "#f7931e";
  else if (selected && !win) return "black";
  else return "#00000000";
};
const Title = styled.div`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  font-size: 1.2rem;
  font-weight: 1000;
  height: 30px;
  margin: auto;
  color: "white";
  text-align: center;
`;

//when clicked, this has to be updated, if same clicked - reset to 0:
function OnClickIcon(activeIconIndex, selectedScore) {
  if (selectedScore === activeIconIndex) {
    return 0;
  } else {
    return activeIconIndex;
  }
}

export default () => {
  const [selectedIcon, setSelectedIcon] = useState();
  const [scoreName, setScoreName] = useState("");
  /*   const [description, setDescription] = useState(
    "Tap an icon to view details..."
  ); */
  const [indexSelected, setIndexSelected] = useState(0);
  const [, dispatch] = useStateValue();
  const [{ post }] = useStateValue();
  const emptyItem = ACHIEVEMENTS[0];
  var scoreList = [];
  if (post.scores.length > 0) {
    scoreList = [emptyItem].concat(post.scores.slice(0)); //[emptyItem, post.scores.slice(0)];
  } else {
    scoreList = ACHIEVEMENTS.slice(0);
  }

  return (
    <FlexColumn>
      <Title>{scoreName}</Title>
      <FlexRow justifyContent="center">
        {scoreList.slice(1).map((item, index) => {
          return (
            <Icon
              key={achievementIcons[item.icon]}
              src={achievementIcons[item.icon]}
              selected={
                post.selectedScore > 0 ? selectedIcon === item.icon : false
              }
              win={post.win}
              onClick={() => {
                dispatch(
                  selectScoreInfo(OnClickIcon(index + 1, post.selectedScore))
                );
                if (indexSelected !== index + 1) {
                  setIndexSelected(index + 1);

                  setScoreName(item.scoreName);
                  setSelectedIcon(item.icon);
                } else {
                  setIndexSelected(0);

                  setScoreName(scoreList[0].scoreName);
                  setSelectedIcon(scoreList[0].icon);
                }
              }}
            ></Icon>
          );
        })}
      </FlexRow>
      <Description item={scoreList[indexSelected]}></Description>
    </FlexColumn>
  );
};
