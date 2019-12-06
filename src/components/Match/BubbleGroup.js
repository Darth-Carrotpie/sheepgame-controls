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
  background-color: gray;
  opacity: 50%;
`;

const FloatingBubbles = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
/*   position: absolute; */
  background-color: black;
  opacity: 50%;
`;

function BubbleGroup() {
const [{ match }] = useStateValue();
return (
    <div>
      <BubblesInLine>
        <BigBubble top="0" bckgColor={"#0f0"}>{match.currentPriceUpgrade1}</BigBubble>
        <BigBubble top="0" bckgColor={"#0f0"}>{match.currentPriceUpgrade1}</BigBubble>
      </BubblesInLine>
        <FloatingBubbles>
          <SmallBubble bubbleImage={grassButton} top={2} bckgColor={"#000000"}>{match.currentPriceGrass}</SmallBubble>
          <SmallBubble bubbleImage={""} top="0" bckgColor={"#0f0"}>{match.currentPriceSheep}</SmallBubble>
          <SmallBubble bubbleImage={smiteButton} top="2" bckgColor={"#000000"}>{match.currentPriceCharge}</SmallBubble>
        </FloatingBubbles>
    </div>
  );
}

export default BubbleGroup;
