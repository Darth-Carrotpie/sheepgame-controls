import React from 'react';
import BigBubble from './BigBubble';
import SmallBubble from './SmallBubble';
import styled from 'styled-components';
import grassButton from '../../images/match/grass_button.png';
import sheepButton from '../../images/match/BuySheep_icon.png';
import smiteButton from '../../images/match/smite_button.png';
import { useStateValue } from '../../store/StateContext';

const BubblesInLine = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
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
function SendMessage(elementName){
  var data = { element: elementName, pressed: false };
  console.log("sending msg: ",data);
  window.airconsole.message(window.airconsole.SCREEN, data);
}
function BubbleGroup() {
const [{ match, menu }] = useStateValue();
return (
    <div>
      <BubblesInLine>
        <BigBubble bckgColor={menu.playerColor} onClick={() => SendMessage("upgrade1")}>{Math.round( match.priceUpgrade1 * 10) / 10 }</BigBubble>
        <BigBubble bckgColor={menu.playerColor} onClick={() => SendMessage("upgrade2")}>{Math.round( match.priceUpgrade2 * 10) / 10 }</BigBubble>
      </BubblesInLine>
        <FloatingBubbles>
          <SmallBubble bubbleImage={grassButton} top={2} onClick={() => SendMessage("buyGrass")}>{Math.round( match.priceGrass * 10) / 10 }</SmallBubble>
          <SmallBubble bubbleImage={sheepButton} top="0" onClick={() => SendMessage("buySheep")} bckgColor={menu.playerColor}>{Math.round( match.priceSheep * 10) / 10 }</SmallBubble>
          <SmallBubble bubbleImage={smiteButton} top="2" onClick={() => SendMessage("smash")}>{Math.round( match.priceSmash * 10) / 10 }</SmallBubble>
        </FloatingBubbles>
    </div>
  );
}

export default BubbleGroup;
