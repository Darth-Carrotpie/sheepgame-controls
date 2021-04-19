import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../../store/StateContext';
import MenuRow from '../../components/Menu/MenuRow';
import MenuRowLeft from '../../components/Menu/MenuRowLeft';
import AudioButton from '../../components/Menu/AudioButton';
import TutorialButton from '../../components/Menu/TutorialButton';
import ItemName from '../../components/Menu/ItemName';
import Margined from '../Layout/Margined';

import CrownsTypography from '../../components/Menu/CrownsTypography';
import Wave from '../../components/Menu/Background/wave';
import King from '../King';
import ItemSelection from '../Menu/ItemSelection';
import ReadyCloud from '../Menu/Cloud';

const KingPosition = styled.div`
  align-items: center;
  margin-top: -6vh;
`;

const ContentContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
  /*background-color: #505050;*/
`;
const WaveContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 50vh;
  min-height: 200px;
  margin-top: -40px;
`;
const WavePosition = styled.div`
  position: absolute;
  width: inherit;
  height: inherit;
  min-height: inherit;
`;
const WaveElementsContainer = styled.div`
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 4vh;
  flex-direction: column;
  align-self: center;
  z-index: +1;
`;
const CrownText = styled.div`
  z-index: inherit;
`;
function MenuView() {
  const [{ menu, global }] = useStateValue();
  return (
    <div>
      <ContentContainer {...global}>
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
          <WaveContainer>
            <WavePosition>
              <Wave color={menu.playerColor ? menu.playerColor : 'black'} />
            </WavePosition>
            <WaveElementsContainer>
              <MenuRow>
                <CrownText>
                  <CrownsTypography
                    isYellow={false}
                    text={
                      menu.permanentCrownCount ? menu.permanentCrownCount : '0'
                    }
                    color={global.backgroundColor}
                  ></CrownsTypography>
                </CrownText>
              </MenuRow>

              <MenuRow>
                <ItemSelection />
              </MenuRow>
            </WaveElementsContainer>
          </WaveContainer>
        </MenuRow>

        <ReadyCloud />
      </ContentContainer>
    </div>
  );
}

export default MenuView;
