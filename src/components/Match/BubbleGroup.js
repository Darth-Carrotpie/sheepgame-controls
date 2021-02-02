import React, { useEffect, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import LongPressable from 'react-longpressable';
import SheepdomTooltip from '../SheepdomTooltip';
import BigBubble from './BigBubble';
import SmallBubbleVector from './SmallBubbleVector';
import styled from 'styled-components';
import GrassIcon from './Vectors/GrassVector';
//import sheepButton from '../../images/match/buy_sheep_icon.png';
import KingUpgradeIcon from './Vectors/KingUpgradeVectors';
import SmashIcon from './Vectors/SmashVector';
import { useStateValue } from '../../store/StateContext';
import UpgradeIcons from './icons';
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
  const idRefUpgA = useRef(null);
  const idRefUpgB = useRef(null);
  const idRefGrass = useRef(null);
  const idRefSpeed = useRef(null);
  const idRefSmash = useRef(null);
  const [{ views, match, menu }, dispatch] = useStateValue();
  const { upgradeA_icon, upgradeB_icon } = match;
  function onClickUpgrade(i) {
    if (upgradeA_icon != '' || upgradeB_icon != '') dispatch(showUpgrade(i));
    else dispatch(showUpgrade('Base'));
  }
  function OnLongPress(e) {
    switch (e) {
      case 'upgA':
        ReactTooltip.show(idRefUpgA.current);
        break;
      case 'upgB':
        ReactTooltip.show(idRefUpgB.current);
        break;
      case 'buyGrass':
        ReactTooltip.show(idRefGrass.current);
        break;
      case 'buySheep':
        ReactTooltip.show(idRefSpeed.current);
        break;
      case 'smash':
        ReactTooltip.show(idRefSmash.current);
        break;
    }
    //console.log('Long pressed.:' + e);
  }
  useEffect(() => {
    if (views.current == 'match') {
      if (match.infoTooltipShown == 0) {
        ReactTooltip.show(document.getElementById('bubleLineTop'));
      }
    }
  }, []);

  return (
    <div>
      <BubblesInLine
        id={'bubleLineTop'}
        data-tip="tap-hold to show an info tooltip about a button!"
        data-for="item_info"
        data-class="tooltipThemeClass"
        data-event="c"
        data-place="bottom"
      >
        <LongPressable
          onShortPress={() => onClickUpgrade(upgradeA_icon)}
          onLongPress={() => OnLongPress('upgA')}
          longPressTime={500}
        >
          <BigBubble
            data-class="tooltipThemeClass"
            ref={idRefUpgA}
            bubbleImage={UpgradeIcons[upgradeA_icon]}
            bckgColor={menu.playerColor}
            notEnoughGold={match.upgradeA_price > match.money}
            data-tip={
              upgradeA_icon
                ? 'upgrade to ' + upgradeA_icon
                : 'upgrade not available'
            }
            data-for="item_info"
            data-event="c"
          >
            {ShowPriceVal(match.upgradeA_price)}
          </BigBubble>
        </LongPressable>
        <LongPressable
          onShortPress={() => onClickUpgrade(upgradeB_icon)}
          onLongPress={() => OnLongPress('upgB')}
          longPressTime={500}
        >
          <BigBubble
            data-class="tooltipThemeClass"
            ref={idRefUpgB}
            bubbleImage={UpgradeIcons[upgradeB_icon]}
            bckgColor={menu.playerColor}
            notEnoughGold={match.upgradeB_price > match.money}
            data-tip={
              upgradeB_icon
                ? 'upgrade to ' + upgradeB_icon
                : 'upgrade not available'
            }
            data-for="item_info"
            data-event="c"
          >
            {ShowPriceVal(match.upgradeB_price)}
          </BigBubble>
        </LongPressable>
      </BubblesInLine>
      <FloatingBubbles>
        <LongPressable
          onShortPress={() => SendMessage('buyGrass', match.priceGrass)}
          onLongPress={() => OnLongPress('buyGrass')}
          longPressTime={500}
        >
          <SmallBubbleVector
            data-class="tooltipThemeClass"
            ref={idRefGrass}
            data-tip="fill up missing grass"
            data-for="item_info"
            iconColor="#9bce76"
            data-event="c"
            //ref={(ref) => (this.fooRef = ref)} // example from "static methods" part in https://www.npmjs.com/package/react-tooltip
            bubbleImage={GrassIcon}
            top={2}
            //onClick={() => SendMessage('buyGrass', match.priceGrass)}
            bckgColor={'#c2e5ac'}
            notEnoughGold={
              Math.round(match.priceGrass * 10) / 10 > Math.round(match.money)
            }
          >
            {' '}
            {Math.round(match.priceGrass * 10) / 10}{' '}
          </SmallBubbleVector>
        </LongPressable>
        <LongPressable
          onShortPress={() => SendMessage('buySheep', match.priceSheep)}
          onLongPress={() => OnLongPress('buySheep')}
          longPressTime={500}
        >
          <SmallBubbleVector
            data-class="tooltipThemeClass"
            ref={idRefSpeed}
            bubbleImage={KingUpgradeIcon}
            top="0"
            bckgColor={menu.playerColor}
            notEnoughGold={
              Math.round(match.priceSheep * 10) / 10 > Math.round(match.money)
            }
            data-tip="upgrade king's move and attack speed"
            data-for="item_info"
            data-event="c"
          >
            {' '}
            {Math.round(match.priceSheep * 10) / 10}{' '}
          </SmallBubbleVector>{' '}
        </LongPressable>
        <LongPressable
          onShortPress={() => SendMessage('smash', match.priceSmash)}
          onLongPress={() => OnLongPress('smash')}
          longPressTime={500}
        >
          <SmallBubbleVector
            data-class="tooltipThemeClass"
            ref={idRefSmash}
            bubbleImage={SmashIcon}
            top="2"
            bckgColor={'#f9b096'}
            notEnoughGold={
              Math.round(match.priceSmash * 10) / 10 > Math.round(match.money)
            }
            data-tip="smash the ground to knock all sheep"
            data-for="item_info"
            data-event="c"
            iconColor="#80372d"
          >
            {' '}
            {Math.round(match.priceSmash * 10) / 10}{' '}
          </SmallBubbleVector>{' '}
        </LongPressable>
      </FloatingBubbles>{' '}
      <SheepdomTooltip></SheepdomTooltip>
    </div>
  );
}

export default BubbleGroup;
