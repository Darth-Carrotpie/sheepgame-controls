import React from 'react';
import styled from 'styled-components';

import CrownsTypography from '../../components/Menu/CrownsTypography';

import { useStateValue } from '../../store/StateContext';
import { ACHIEVEMENTS } from './constants';
import SendAirConsole from '../AirConsoleHandler';
import NerisBlack from '../../fonts/NerisBlack.otf';
import PlayAgainSVG from '../Post/Backgrounds/PlayAgainSVG';

const TypographyPosition = styled.div`
  position: absolute;
  bottom: 10px;
  left: 5vw;
  right: 45vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BottomRow = styled.div`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  z-index: 1;
  display: flex;
  justify-content: space-between;
  color: 'white';
  height: 100%;
  width: 100%;
`;
const PlayAgainContainer = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  right: 0;
  width: 250px;
  &:active {
    filter: opacity(50%);
  }
`;
const Text = styled.span`
  position: absolute;
  bottom: 18px;
  right: 5vw;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 1000;
  pointer-events: none;
`;
function OnClickPlay() {
  var data = { element: 'playAgain', pressed: true };
  console.log('data send:', data);
  SendAirConsole(data);
}
export default () => {
  const [{ menu, post, global }] = useStateValue();

  var reward = '';
  if (post.selectedScore > 0) {
    if (post.scores.length > 0) {
      var score = post.scores[post.selectedScore - 1];
      reward = Math.floor((score.counter / score.rewardDelta) * score.reward);
    } else {
      reward = ACHIEVEMENTS[post.selectedScore].total;
    }
  } else {
    reward = post.totalScore;
  }

  return (
    <BottomRow>
      <PlayAgainContainer onClick={OnClickPlay}>
        <PlayAgainSVG
          color={post.win ? global.backgroundColor : 'black'}
        ></PlayAgainSVG>
        <Text style={{ marginTop: '5px' }}>
          {post.playAgain ? 'waiting...' : 'play again'}
        </Text>
      </PlayAgainContainer>
      <TypographyPosition>
        <CrownsTypography
          color="white"
          text={menu.permanentCrownCount}
        ></CrownsTypography>
        <CrownsTypography color="white" text={reward}></CrownsTypography>
      </TypographyPosition>
    </BottomRow>
  );
};
