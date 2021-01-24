import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../../store/StateContext';
import ItemName from '../../components/Menu/ItemName';
import FlexColumn from '../Layout/FlexColumn';
import FlexRow from '../Layout/FlexRow';
import victoryImg from '../../images/post/victory_background.png';
import defeatImg from '../../images/post/defeat_background.png';
import PreBackground from '../../components/PreBackground';
import BottomRow from '../Post/BottomRow';
import Achievements from '../Post/Achievements';
import King from '../King';
import KingDead from '../King/KingDead';
import VictoryRays from '../Post/Backgrounds/VictoryRays';
import VictoryWave from '../Post/Backgrounds/VictoryWave';

const BottomRowPosition = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0vh;
`;
const AchievementsPosition = styled.div`
  position: absolute;
  bottom: 14vh;
  z-index: 1;
`;

const NamePosition = styled.div`
  position: absolute;
  top: 40vh;
`;

const ScreenBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  z-index: -1;
`;
function KingArea(props) {
  if (props.isKingAlive) {
    return <King showLocks={false} />;
  } else {
    return <KingDead />;
  }
}
function MenuView() {
  const [{ menu }] = useStateValue();
  const [
    {
      post: { win },
    },
  ] = useStateValue();
  return (
    <div>
      <ScreenBackground color={menu.playerColor}></ScreenBackground>
      <FlexRow justifyContent="center" height="40vh">
        <KingArea isKingAlive={win} />
        <VictoryRays color="white" />
      </FlexRow>
      <NamePosition>
        <VictoryWave color="white"></VictoryWave>
        <FlexRow justifyContent="center">
          <FlexColumn>
            <ItemName
              nameValue={win ? 'victory' : 'defeat'}
              fontSize={55}
              height={7}
              playerColor={win ? '#f7931e' : 'black'}
            ></ItemName>
            <ItemName
              nameValue={menu.playerName}
              fontSize={24}
              height={7}
              playerColor={win ? '#f7931e' : 'black'}
            ></ItemName>
          </FlexColumn>
        </FlexRow>
      </NamePosition>
      <AchievementsPosition>
        <Achievements></Achievements>
      </AchievementsPosition>
      <BottomRowPosition>
        <BottomRow></BottomRow>
      </BottomRowPosition>
    </div>
  );
}

export default MenuView;
