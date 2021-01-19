import React, { useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import LongPressable from 'react-longpressable';
import SheepdomTooltip from '../SheepdomTooltip';
import BigBubble from './BigBubble';
import SmallBubble from './SmallBubble';
import SmallBubbleVector from './SmallBubbleVector';
import styled from 'styled-components';
import grassButton from '../../images/match/buy_grass_icon.png';
//import sheepButton from '../../images/match/buy_sheep_icon.png';
import KingUpgradeIcon from './Vectors/KingUpgradeVectors';
import smiteButton from '../../images/match/smite_icon.png';
import { useStateValue } from '../../store/StateContext';
import upgradeIcons from '../../images/upgrade/icons';
import SendAirConsole from '../AirConsoleHandler';
import { showUpgrade } from '../../store/actions';

const BubblesInLine = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin-left: 17vw;
  margin-right: 17vw;
  /*   background-color: gray;
  opacity: 50%; */
`;

const FloatingBubbles = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /*   position: absolute; */
  /*   background-color: black;
  opacity: 50%; */
`;

function SendMessage(elementName, priceVal) {
  if (priceVal > 0) {
    var data = {
      element: elementName,
      pressed: false,
    };
    SendAirConsole(data);
  }
}

function ShowPriceVal(inputValue) {
  if (inputValue > 0) {
    return Math.round(inputValue * 10) / 10;
  } else {
    return '';
  }
}

function BubbleGroup() {
  const idRef = useRef(null);
  const [{ match, menu }, dispatch] = useStateValue();
  const { upgradeA_icon, upgradeB_icon } = match;
  function onClickUpgrade(i) {
    if (upgradeA_icon != '' || upgradeB_icon != '') dispatch(showUpgrade(i));
    else dispatch(showUpgrade('Base'));
  }
  function onLongPress(e) {
    ReactTooltip.show(idRef.current);
    //ReactTooltip.show(this.fooRef);
    console.log('Long pressed.');
  }

  return (
    <div>
      <BubblesInLine>
        <BigBubble
          bubbleImage={upgradeIcons[upgradeA_icon]}
          bckgColor={menu.playerColor}
          notEnoughGold={match.upgradeA_price > match.money}
          onClick={() => {
            onClickUpgrade(upgradeA_icon);
            //ShowUpgrade(upgradeIndex, match.upgradeA_price);
          }}
          data-tip={
            upgradeA_icon
              ? 'Upgrade to ' + upgradeA_icon
              : 'Upgrade not available'
          }
          data-for="item_info"
        >
          {ShowPriceVal(match.upgradeA_price)}
        </BigBubble>

        <BigBubble
          bubbleImage={upgradeIcons[upgradeB_icon]}
          bckgColor={menu.playerColor}
          notEnoughGold={match.upgradeB_price > match.money}
          onClick={() => {
            onClickUpgrade(upgradeB_icon);
            //ShowUpgrade(upgradeIndex, match.upgradeB_price);
          }}
          data-tip={
            upgradeB_icon
              ? 'Upgrade to ' + upgradeB_icon
              : 'Upgrade not available'
          }
          data-for="item_info"
        >
          {ShowPriceVal(match.upgradeB_price)}
        </BigBubble>
      </BubblesInLine>
      <FloatingBubbles>
        <LongPressable
          onShortPress={() => SendMessage('buyGrass', match.priceGrass)}
          onLongPress={onLongPress}
          longPressTime={500}
        >
          <SmallBubble
            data-tip="Fill up missing grass"
            data-for="item_info"
            data-event="c"
            ref={idRef}
            //ref={(ref) => (this.fooRef = ref)} // example from "static methods" part in https://www.npmjs.com/package/react-tooltip
            bubbleImage={grassButton}
            top={2}
            //onClick={() => SendMessage('buyGrass', match.priceGrass)}
            bckgColor={'#c2e5ac'}
            notEnoughGold={
              Math.round(match.priceGrass * 10) / 10 > Math.round(match.money)
            }
          >
            {' '}
            {Math.round(match.priceGrass * 10) / 10}{' '}
          </SmallBubble>
        </LongPressable>
        <SmallBubbleVector
          bubbleImage={KingUpgradeIcon}
          iconColor={'#ffffff'}
          top="0"
          onClick={() => SendMessage('buySheep', match.priceSheep)}
          bckgColor={menu.playerColor}
          notEnoughGold={
            Math.round(match.priceSheep * 10) / 10 > Math.round(match.money)
          }
          data-tip="Upgrade king's attack speed"
          data-for="item_info"
        >
          {' '}
          {Math.round(match.priceSheep * 10) / 10}{' '}
        </SmallBubbleVector>{' '}
        <SmallBubble
          bubbleImage={smiteButton}
          top="2"
          onClick={() => SendMessage('smash', match.priceSmash)}
          bckgColor={'#f9b096'}
          notEnoughGold={
            Math.round(match.priceSmash * 10) / 10 > Math.round(match.money)
          }
          data-tip="Smash the ground to knock all sheep"
          data-for="item_info"
        >
          {' '}
          {Math.round(match.priceSmash * 10) / 10}{' '}
        </SmallBubble>{' '}
      </FloatingBubbles>{' '}
      <SheepdomTooltip ref={idRef}></SheepdomTooltip>
    </div>
  );
}

export default BubbleGroup;
