import React from 'react';
import BigBubble from './BigBubble';
import SmallBubble from './SmallBubble';
import styled from 'styled-components';
import grassButton from '../../images/match/grass_button.png';
import sheepButton from '../../images/match/sheep_face.png';
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

function BubbleGroup() {
const [{ match, menu }] = useStateValue();
return (
    <div>
      <BubblesInLine>
        <BigBubble bckgColor={menu.playerColor}>{match.priceUpgrade1}</BigBubble>
        <BigBubble bckgColor={menu.playerColor}>{match.priceUpgrade1}</BigBubble>
      </BubblesInLine>
        <FloatingBubbles>
          <SmallBubble bubbleImage={grassButton} top={2} >{match.priceGrass}</SmallBubble>
          <SmallBubble bubbleImage={sheepButton} top="0" bckgColor={menu.playerColor}>{match.priceSheep}</SmallBubble>
          <SmallBubble bubbleImage={smiteButton} top="2" >{match.priceCharge}</SmallBubble>
        </FloatingBubbles>
    </div>
  );
}

export default BubbleGroup;
