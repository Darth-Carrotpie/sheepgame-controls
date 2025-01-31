import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../store/StateContext';
import MoreGold from './Vectors/MoreGold';

const BubbleImage = styled.div`
  margin-top: 25%;
  height: 50%;
  width: 50%;
`;
const NotEnoughGoldWrap = styled.div`
  position: absolute;
  height: 50%;
  width: 50%;
  bottom: -10%;
  left: -10%;
`;
function BubbleIconVector(props) {
  const [{ global }] = useStateValue();
  if (!props.bubbleImage) return null;
  return (
    <BubbleImage bg={props.bubbleImage} alt="bubbleImage">
      <props.bubbleImage
        color={props.iconColor ? props.iconColor : global.backgroundColor}
      >
        {' '}
      </props.bubbleImage>
      {props.notEnoughGold ? (
        <NotEnoughGoldWrap>
          <MoreGold></MoreGold>
        </NotEnoughGoldWrap>
      ) : (
        <></>
      )}
    </BubbleImage>
  );
}

export default BubbleIconVector;
