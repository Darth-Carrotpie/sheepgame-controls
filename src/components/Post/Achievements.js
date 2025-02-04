import React, { useState } from 'react';
import styled from 'styled-components';

import FlexColumn from '../Layout/FlexColumn';
import FlexRow from '../Layout/FlexRow';
import { Description } from './Description';

import * as achievementIcons from '../Post/Vectors';
import { ACHIEVEMENTS } from './constants';

import { useStateValue } from '../../store/StateContext';
import NotoSans from '../../fonts/NotoSans-Bold.ttf';
import { selectScoreInfo } from '../../store/actions';
import translations from '../../store/reducers/translations';

const Icon = styled.div`
  height: 10vw;
  max-height: 100px;
  width: 10vw;
  max-width: 100px;
  border: 3px solid;
  border-color: ${(props) =>
    props.selected ? props.backgroundColor : '#00000000'};
  border-radius: 100%;
  box-sizing: border-box;
  box-shadow: none;
`;

const Title = styled.div`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-family: NotoSans;
  font-size: 1.2rem;
  font-weight: 1000;
  height: 5vh;
  margin: auto;
  text-align: center;
  color: ${(props) => props.textColor};
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
  const [{ post, global, views, translations }] = useStateValue();
  //if (views.current != 'post') return <></>;
  const [selectedIcon, setSelectedIcon] = useState();
  const [scoreName, setScoreName] = useState('');

  const [indexSelected, setIndexSelected] = useState(0);
  const [, dispatch] = useStateValue();

  const emptyItem = ACHIEVEMENTS[0];
  ACHIEVEMENTS[0].description = translations.achievements_info;
  var scoreList = [];
  if (post.scores.length > 0) {
    scoreList = [emptyItem].concat(post.scores.slice(0)); //[emptyItem, post.scores.slice(0)];
  } else {
    scoreList = ACHIEVEMENTS.slice(0);
  }

  return (
    <FlexColumn>
      <Title textColor={global.backgroundColor}>{scoreName}</Title>
      <FlexRow justifyContent="center">
        {scoreList.slice(1).map((item, index) => {
          var IconInList = achievementIcons[item.icon];
          return (
            <Icon
              {...global}
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

                  setScoreName(item.displayName);
                  setSelectedIcon(item.icon);
                } else {
                  setIndexSelected(0);

                  setScoreName(scoreList[0].displayName);
                  setSelectedIcon(scoreList[0].icon);
                }
              }}
            >
              <IconInList color={global.backgroundColor}></IconInList>
            </Icon>
          );
        })}
      </FlexRow>
      <Description item={scoreList[indexSelected]}></Description>
    </FlexColumn>
  );
};
