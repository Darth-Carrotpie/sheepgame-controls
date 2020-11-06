import React from "react";
import { useStateValue } from "../../store/StateContext";
import { ReadyCloud } from "../../components/Menu/Cloud";
import MenuRow from "../../components/Menu/MenuRow";
import MenuRowLeft from "../../components/Menu/MenuRowLeft";
import ArrowButton from "../../components/Menu/Arrow";
import AudioButton from "../../components/Menu/AudioButton";
import TutorialButton from "../../components/Menu/TutorialButton";
import ItemName from "../../components/Menu/ItemName";
import EmptyRow from "../Layout/EmptyRow";
import FlexColumn from "../Layout/FlexColumn";
import Margined from "../Layout/Margined";
import selectionScreenImg from "../../images/menu/SelectionScreen_background.png";
import styled from "styled-components";

import CrownsTypography from "../../components/Menu/CrownsTypography";
import PreBackground from "../../components/PreBackground";
import King from "../King";
import Requirements from "../../components/Menu/Requirements";

const KingPosition = styled.div`
  align-items: center;
  margin-top: -6vh;
`;
function MenuView() {
  const [{ menu }] = useStateValue();
  return (
    <div>
      <PreBackground {...menu} preBckgImage={selectionScreenImg}>
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
              playerColor={menu.playerColor ? menu.playerColor : "black"}
            ></ItemName>
          </Margined>
        </MenuRow>
        <MenuRow>
          <CrownsTypography
            isYellow={false}
            text={menu.permanentCrownCount}
          ></CrownsTypography>
        </MenuRow>
        <MenuRow>
          <FlexColumn>
            <MenuRow>
              <ArrowButton
                elementMessage={"changeHat"}
                valueMessage={-1}
                left
              ></ArrowButton>
              <ItemName
                nameValue={menu.hatName}
                fontSize={24}
                height={5}
              ></ItemName>
              <ArrowButton
                elementMessage={"changeHat"}
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
                elementMessage={"changeScepter"}
                valueMessage={-1}
                left
              ></ArrowButton>
              <ItemName
                nameValue={menu.scepterName}
                fontSize={24}
                height={5}
              ></ItemName>
              <ArrowButton
                elementMessage={"changeScepter"}
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
              <EmptyRow rowHeight={3}></EmptyRow>
            </MenuRow>

            <MenuRow>
              <ReadyCloud></ReadyCloud>
            </MenuRow>
          </FlexColumn>
        </MenuRow>
      </PreBackground>
    </div>
  );
}

export default MenuView;
