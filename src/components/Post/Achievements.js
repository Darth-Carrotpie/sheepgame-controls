import React, { useState } from "react";
import styled from "styled-components";

import FlexColumn from "../Layout/FlexColumn";
import FlexRow from "../Layout/FlexRow";

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

const Description = styled.div`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 900;
  height: 100px;
  margin: 20px;
  color: "white";
  text-align: center;
`;
//when clicked, this has to be updated, if same clicked - reset to 0:
//var activeIconIndex = 0;
/* function OnClickIcon(activeIconIndex) {
  const [{ post }, dispatch] = useStateValue();
  if (post.selectedScore == activeIconIndex) {
    return dispatch(selectScoreInfo(0));
  } else {
    return dispatch(selectScoreInfo(activeIconIndex));
  }
} */

export default () => {
  const [selectedIcon, setSelectedIcon] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [{ post }] = useStateValue();

  return (
    <FlexColumn>
      <Title>{title}</Title>
      <FlexRow justifyContent="space-between">
        {ACHIEVEMENTS.slice(1).map((talent, index) => {
          return (
            <Icon
              key={achievementIcons[talent.icon]}
              src={achievementIcons[talent.icon]}
              selected={
                post.selectedScore > 0 ? selectedIcon === talent.icon : false
              }
              win={post.win}
              onClick={() => {
                setTitle(talent.title);
                setDescription(talent.description);
                setSelectedIcon(talent.icon);
                //OnClickIcon(index + 1);
              }}
            ></Icon>
          );
        })}
      </FlexRow>
      <Description>{description}</Description>
    </FlexColumn>
  );
};
