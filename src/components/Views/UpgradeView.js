import React from "react";
import { useStateValue } from "../../store/StateContext";
import BigBubble, { BackBubble } from "../Match/BigBubble";
import styled from "styled-components";
import UpgradeButton from "../Upgrade/UpgradeButton";
import ItemName from "../../components/Menu/ItemName";
import Sheep from "../Upgrade/Sheep";
import NerisBlack from "../../fonts/NerisBlack.otf";
import * as upgradeIcons from "../../images/upgrade/icons";

const DescriptionStyle = styled.span`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  font-family: NerisBlack;
  font-size: 1rem;
  font-weight: 900;
  height: 80px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;
function OnClickBack() {
  var data = { element: "view", value: "back" };
  window.airconsole.message(window.airconsole.SCREEN, data);
}
const BubblesInLine = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-top: 10vh;
`;
const UpgradeTitleText = styled.div`
  letter-spacing: 1px;
  margin: 3vh;
  text-align: center;
`;
const UpgradeDescriptionText = styled.div`
  margin: 3vh;
  text-align: center;
`;
const UpgradeButtonPosition = styled.div`
  position: absolute;
  bottom: -3px;
  right: 0;
`;
const SheepContainer = styled.div`
  transform: scale(0.7);
  margin-top: -10vh;
`;

function OnClickBuyUpgrade(elementName) {
  var data = { element: elementName, pressed: true };
  window.airconsole.message(window.airconsole.SCREEN, data);
}
function ShowPriceVal(inputValue) {
  //console.log("inputval:" + inputValue);
  if (inputValue > 0) {
    return Math.round(inputValue * 10) / 10;
  } else {
    return "";
  }
}
function SendMessage(elementName, priceVal) {
  if (priceVal > 0) {
    var data = {
      element: elementName,
      pressed: false
    };
    //console.log("sending msg: ", data);
    window.airconsole.message(window.airconsole.SCREEN, data);
  }
}
function UpgradeView() {
  const [{ match, menu }] = useStateValue();
  return (
    <div>
      <div>
        <BubblesInLine>
          <BackBubble
            bckgColor={menu.playerColor}
            onClick={() => OnClickBack()}
            rightHalf
          ></BackBubble>
          <BigBubble
            selected={match.upgradeA_icon === match.selectedUpgradeIcon}
            bubbleImage={upgradeIcons[match.upgradeA_icon]}
            bckgColor={menu.playerColor}
            onClick={() => SendMessage("upgrade1", match.upgradeA_price)}
          >
            {ShowPriceVal(match.upgradeA_price)}
          </BigBubble>
          <BigBubble
            selected={match.upgradeB_icon === match.selectedUpgradeIcon}
            bubbleImage={upgradeIcons[match.upgradeB_icon]}
            bckgColor={menu.playerColor}
            onClick={() => SendMessage("upgrade2", match.upgradeB_price)}
          >
            {ShowPriceVal(match.upgradeB_price)}
          </BigBubble>
          <BackBubble
            bckgColor={menu.playerColor}
            onClick={() => OnClickBack()}
            leftHalf
          ></BackBubble>
        </BubblesInLine>
        <UpgradeTitleText>
          <DescriptionStyle>{match.upgradeDisplayName}</DescriptionStyle>
        </UpgradeTitleText>
        <UpgradeDescriptionText>
          <DescriptionStyle>{match.upgradeDescription}</DescriptionStyle>
        </UpgradeDescriptionText>
        <SheepContainer>
          <Sheep selectedSheep={match.selectedUpgradeIcon}></Sheep>
        </SheepContainer>

        <UpgradeButtonPosition>
          <UpgradeButton
            bckgColor={menu.playerColor}
            onClick={() => OnClickBuyUpgrade("upgrade")}
          >
            <ItemName
              nameValue={"Upgrade"}
              fontSize={55}
              height={7}
              playerColor={"#ffffff"}
            ></ItemName>
          </UpgradeButton>
        </UpgradeButtonPosition>
      </div>
    </div>
  );
}

export default UpgradeView;
