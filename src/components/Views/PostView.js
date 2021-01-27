import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../../store/StateContext';
import ItemName from '../../components/Menu/ItemName';
import FlexColumn from '../Layout/FlexColumn';
import FlexRow from '../Layout/FlexRow';
import BottomRow from '../Post/BottomRow';
import Achievements from '../Post/Achievements';
import King from '../King';
import KingDead from '../King/KingDead';
import VictoryRays from '../Post/Backgrounds/VictoryRays';
import VictoryWave from '../Post/Backgrounds/VictoryWave';
import DefeatWave from '../Post/Backgrounds/DefeatWave';
import GrayUpside from '../Post/Backgrounds/GrayUpside';
import GrayDownside from '../Post/Backgrounds/GrayDownside';

const BottomRowPosition = styled.div`
  width: 100%;
  position: absolute;
  height: 30vh;
  bottom: 0vh;
`;
const AchievementsPosition = styled.div`
  position: absolute;
  top: 60vh;
  height: 20vh;
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
  const [{ menu, global }] = useStateValue();
  const [
    {
      post: { win },
    },
  ] = useStateValue();
  return (
    <div>
      <ScreenBackground color={menu.playerColor}></ScreenBackground>
      {win == 1 ? (
        <VictoryRays color={global.backgroundColor} />
      ) : (
        <>
          <GrayUpside></GrayUpside>
          <GrayDownside></GrayDownside>
        </>
      )}
      <FlexRow justifyContent="center">
        <KingArea isKingAlive={win} />
      </FlexRow>

      <NamePosition>
        {win == 1 ? (
          <VictoryWave color={global.backgroundColor}></VictoryWave>
        ) : (
          <DefeatWave color={global.backgroundColor}></DefeatWave>
        )}
        <FlexRow justifyContent="center">
          <FlexColumn>
            <ItemName
              nameValue={win ? 'victory' : 'defeat'}
              fontSize={55}
              height={7}
              playerColor="white" //{win ? '#f7931e' : 'black'}
            ></ItemName>
            <ItemName
              nameValue={menu.playerName}
              fontSize={24}
              height={7}
              playerColor={menu.playerColor} //{win ? '#f7931e' : 'black'}
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
