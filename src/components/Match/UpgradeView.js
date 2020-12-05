import React from 'react';
import { useStateValue } from '../../store/StateContext';
import BigBubble, { BackBubble } from '../Match/BigBubble';
import styled from 'styled-components';
import UpgradeButton from '../Upgrade/UpgradeButton';
import Sheep from '../Upgrade/Sheep';
import NerisBlack from '../../fonts/NerisBlack.otf';
import upgradeIcons from '../../images/upgrade/icons';
import SendAirConsole from '../AirConsoleHandler';
import { showUpgrade } from '../../store/actions';
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WhiteBackground = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;
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
  var data = { element: 'view', value: 'back' };
  console.log(data);
  SendAirConsole(data);
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
  border: 0;
`;
const SheepContainer = styled.div`
  width: 30vh;
  margin-top: -5vh;
`;

function OnClickBuyUpgrade(elementName, index) {
  var data = { element: elementName, pressed: true, upgradeIndex: index };
  console.log(data);
  SendAirConsole(data);
}
function ShowPriceVal(inputValue) {
  if (inputValue > 0) {
    return Math.round(inputValue * 10) / 10;
  } else {
    return '';
  }
}
function UpgradeView() {
  const [{ match, menu }, dispatch] = useStateValue();
  const { upgradeA_icon, upgradeB_icon } = match;
  const hideUpgrade = () => {
    dispatch(showUpgrade(''));
  };
  function onClickUpgrade(i) {
    if (upgradeA_icon != '' || upgradeB_icon != '') dispatch(showUpgrade(i));
    else dispatch(showUpgrade('Base'));
  }
  var index = match.showUpgrade;
  const { upgradeData } = match;

  return (
    <div>
      <div>
        <WhiteBackground></WhiteBackground>
        <BubblesInLine>
          <BackBubble
            bckgColor={menu.playerColor}
            onClick={hideUpgrade}
            rightHalf
          ></BackBubble>
          <BigBubble
            selected={match.upgradeA_icon === match.selectedUpgradeIcon}
            bubbleImage={upgradeIcons[match.upgradeA_icon]}
            bckgColor={menu.playerColor}
            onClick={() => onClickUpgrade(upgradeB_icon)}
          >
            {ShowPriceVal(match.upgradeA_price)}
          </BigBubble>
          <BigBubble
            selected={match.upgradeB_icon === match.selectedUpgradeIcon}
            bubbleImage={upgradeIcons[match.upgradeB_icon]}
            bckgColor={menu.playerColor}
            onClick={() => onClickUpgrade(upgradeB_icon)}
          >
            {ShowPriceVal(match.upgradeB_price)}
          </BigBubble>
          <BackBubble
            bckgColor={menu.playerColor}
            onClick={hideUpgrade}
            leftHalf
          ></BackBubble>
        </BubblesInLine>
        <UpgradeTitleText>
          <DescriptionStyle>
            {upgradeData[index].upgradeDisplayName}
          </DescriptionStyle>
        </UpgradeTitleText>
        <UpgradeDescriptionText>
          <DescriptionStyle>
            {upgradeData[index].upgradeDescription}
          </DescriptionStyle>
        </UpgradeDescriptionText>
        <Wrapper>
          <SheepContainer>
            <Sheep
              selectedSheep={match.currentUpgradeIcon}
              color={menu.playerColor}
            ></Sheep>
          </SheepContainer>
        </Wrapper>
        <UpgradeButtonPosition>
          <UpgradeButton
            bckgColor={menu.playerColor}
            onClick={() => {
              OnClickBuyUpgrade('upgrade', index);
              hideUpgrade();
            }}
          ></UpgradeButton>
        </UpgradeButtonPosition>
      </div>
    </div>
  );
}

export default UpgradeView;
