import React from 'react';
import { useStateValue } from '../../store/StateContext';
import { ReadyCloud } from '../../components/Menu/Cloud';
import MenuRow from '../../components/Menu/MenuRow';
import MenuRowLeft from '../../components/Menu/MenuRowLeft';
import ArrowButton from '../../components/Menu/Arrow';
import AudioButton from '../../components/Menu/AudioButton';
import TutorialButton from '../../components/Menu/TutorialButton';
import ItemName from '../../components/Menu/ItemName';
import EmptyRow from '../Layout/EmptyRow';
import FlexColumn from '../Layout/FlexColumn';
import Margined from '../Layout/Margined';
import styled from 'styled-components';

import CrownsTypography from '../../components/Menu/CrownsTypography';
import BckgTop from '../../components/Menu/Background/top';
import BckgBottom from '../../components/Menu/Background/bottom';
import King from '../King';
import Requirements from '../../components/Menu/Requirements';

const KingPosition = styled.div`
  align-items: center;
  margin-top: -6vh;
`;

const ImageContainer = styled.div`
  position: absolute;
  height: 30vh;
  width: 100vw;
  overflow: show;
  top: 50vh;
  background-color: ${(props) => (props.bckgColor ? props.bckgColor : '#f0f')};
  margin: 0;
`;
const ContentContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const TopWave = styled.div`
  width: 100vw;
  /*display: inline-block;
  position: absolute;
  -webkit-transform: translateY(-95%);
  -moz-transform: translateY(-95%);*/
  margin: 0;
  border: none;
`;
const CrownText = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 115%);
`;
const BotWave = styled.div`
  position: absolute;
  width: 100vw;
  pointer-events: none;
`;
function MenuView() {
  const [{ menu }] = useStateValue();
  return (
    <div>
      <ContentContainer>
        <MenuRowLeft>
          <AudioButton {...menu}></AudioButton>
          <TutorialButton {...menu}></TutorialButton>
        </MenuRowLeft>
        <MenuRow>
          <KingPosition>
            <King showLocks={true}></King>
          </KingPosition>
        </MenuRow>
        <MenuRow>
          <Margined>
            <ItemName
              nameValue={menu.playerName}
              fontSize={24}
              height={7}
              playerColor={menu.playerColor ? menu.playerColor : 'black'}
            ></ItemName>
          </Margined>
        </MenuRow>
        <MenuRow>
          <TopWave>
            <BckgTop color={menu.playerColor}></BckgTop>
          </TopWave>
          <CrownText>
            <CrownsTypography
              isYellow={false}
              text={menu.permanentCrownCount}
            ></CrownsTypography>
          </CrownText>
        </MenuRow>
        <MenuRow>
          <FlexColumn bckgColor={menu.playerColor} id="FlexColumn">
            <MenuRow>
              <ArrowButton
                elementMessage={'changeHat'}
                valueMessage={-1}
                left
              ></ArrowButton>
              <ItemName
                nameValue={menu.hatName}
                fontSize={24}
                height={5}
              ></ItemName>
              <ArrowButton
                elementMessage={'changeHat'}
                valueMessage={1}
              ></ArrowButton>
            </MenuRow>

            <MenuRow>
              <Requirements
                hatUnlocked={menu.hatUnlocked}
                premiumReqMet={menu.hatPremiumReqMet}
                crownsReqMet={menu.hatCrownsReqMet}
                crownsReq={menu.hatCrownsReq}
              ></Requirements>
            </MenuRow>

            <MenuRow>
              <EmptyRow rowHeight={2}></EmptyRow>
            </MenuRow>

            <MenuRow>
              <ArrowButton
                elementMessage={'changeScepter'}
                valueMessage={-1}
                left
              ></ArrowButton>
              <ItemName
                nameValue={menu.scepterName}
                fontSize={24}
                height={5}
              ></ItemName>
              <ArrowButton
                elementMessage={'changeScepter'}
                valueMessage={1}
              ></ArrowButton>
            </MenuRow>
            <MenuRow>
              <Requirements
                hatUnlocked={menu.scepterUnlocked}
                premiumReqMet={menu.scepterPremiumReqMet}
                crownsReqMet={menu.scepterCrownsReqMet}
                crownsReq={menu.scepterCrownsReq}
              ></Requirements>
            </MenuRow>

            <MenuRow>
              <EmptyRow rowHeight={1}></EmptyRow>
            </MenuRow>

            <MenuRow bckgColor={'#fff'}>
              <BotWave>
                <BckgBottom color={menu.playerColor}></BckgBottom>
              </BotWave>
              <ReadyCloud></ReadyCloud>
            </MenuRow>
          </FlexColumn>
        </MenuRow>
      </ContentContainer>
    </div>
  );
}

export default MenuView;
