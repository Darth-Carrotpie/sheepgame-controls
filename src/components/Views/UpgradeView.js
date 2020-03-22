import React from 'react';
import win_view from '../../images/win_view.png';
import { useStateValue } from '../../store/StateContext';
import BigBubble, { BackBubble } from '../Match/BigBubble';
import styled from 'styled-components';
import UpgradeButton from '../Upgrade/UpgradeButton';
import ItemName from '../../components/Menu/ItemName';
import { Text } from '../Match/Typography';
import Sheep from '../Upgrade/Sheep';

function OnClickBack() {
  var data = { element: 'view', value: 'back' };
  window.airconsole.message(window.airconsole.SCREEN, data);
}
const BubblesInLine = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-top: 10vh;
`;
const UpgradeText = styled.div`
  margin: 3vh;
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
function UpgradeView() {
  const [{ match, menu }] = useStateValue();
  return (
    <div>
      {/* <div>
        <h3>{match.upgradeDisplayName}</h3>
        <h3>{match.upgradeDescription}</h3>
        <img
          src={win_view}
          alt="win_view"
          style={{ maxWidth: '100%', maxHeight: '100vh', position: 'absolute' }}
          onClick={() => OnClickBack()}
        />
      </div> */}
      <div>
        <BubblesInLine>
          <BackBubble
            bckgColor={menu.playerColor}
            onClick={() => OnClickBack()}
            rightHalf
          ></BackBubble>
          <BigBubble
            bckgColor={menu.playerColor}
            onClick={() => OnClickBuyUpgrade('upgrade')}
          >
            {Math.round(match.priceUpgrade * 10) / 10}
          </BigBubble>
          <BigBubble bckgColor={menu.playerColor} onClick={() => OnClickBack()}>
            {'X'}
          </BigBubble>
          <BackBubble
            bckgColor={menu.playerColor}
            onClick={() => OnClickBack()}
            leftHalf
          ></BackBubble>
        </BubblesInLine>

        <UpgradeText>
          <Text>Lorem ipsum</Text>
        </UpgradeText>
        <SheepContainer>
          <Sheep></Sheep>
        </SheepContainer>

        <UpgradeButtonPosition>
          <UpgradeButton bckgColor={menu.playerColor}>
            <ItemName
              nameValue={'Upgrade'}
              fontSize={55}
              height={7}
              playerColor={'#ffffff'}
            ></ItemName>
          </UpgradeButton>
        </UpgradeButtonPosition>
      </div>
    </div>
  );
}

export default UpgradeView;
