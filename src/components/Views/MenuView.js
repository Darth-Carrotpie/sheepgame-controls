import React from "react";
import { useStateValue } from "../../store/StateContext";
import { ReadyCloud } from "../../components/Menu/Cloud";
import MenuRow from "../../components/Menu/MenuRow";
import ArrowButton from "../../components/Menu/Arrow";
import ItemName from "../../components/Menu/ItemName";
import EmptyRow from "../Layout/EmptyRow";
import FlexColumn from "../Layout/FlexColumn";
import Margined from "../Layout/Margined";
import selectionScreenImg from "../../images/menu/SelectionScreen_prebackground.png";
import crownIcon from "../../images/menu/icon_crown.png";
import heroIcon from "../../images/menu/LogoHero_256.png";

import Typography from "../../components/Match/Typography";
import PreBackground from "../../components/PreBackground";
import King from "../King";

function ShowRequirement(unlocked, premiumReqMet, crownsReqMet, crownsReq) {
  var requirmentString = "";
  if (unlocked) {
    requirmentString = "available";
  } else {
    if (!premiumReqMet) {
      requirmentString = "(%hero) only! "; //needs to display hero icon here (heroIcon)
    }
    if (!crownsReqMet) {
      requirmentString += "(%crowns) " + crownsReq; //needs to be an actual crown icon here (crownIcon)
    }
  }
  return requirmentString;
}
function MenuView() {
  const [{ menu }] = useStateValue();
  return (
    <div>
      <PreBackground {...menu} preBckgImage={selectionScreenImg}>
        <King showLocks={true}></King>
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
          <Typography icon={crownIcon} textColor={"white"}>
            {menu.crowns}
          </Typography>
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
              <ItemName
                nameValue={ShowRequirement(
                  menu.hatUnlocked,
                  menu.hatPremiumReqMet,
                  menu.hatCrownsReqMet,
                  menu.hatCrownsReq
                )}
                fontSize={12}
                height={3}
              ></ItemName>
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
              <ItemName
                nameValue={ShowRequirement(
                  menu.scepterUnlocked,
                  menu.scepterPremiumReqMet,
                  menu.scepterCrownsReqMet,
                  menu.scepterCrownsReq
                )}
                fontSize={12}
                height={3}
              ></ItemName>
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
