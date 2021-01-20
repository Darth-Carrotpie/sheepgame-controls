import React, { forwardRef } from 'react';
import styled from 'styled-components';
import BubbleText from './BubbleText';
import BubbleIcon from './BubbleIcon';

const BubbleButton = styled.button`
  height: 15vh;
  width: 15vh;
  background-color: ${(props) => (props.bckgColor ? props.bckgColor : '#0f0')};
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  top: 0vh;
  border-color: ${(props) => (props.notEnoughGold ? 'red' : '#f7931e')};
  border: ${(props) =>
    props.selected || props.notEnoughGold ? '3px solid' : 'none'};
  border-radius: 100%;
  padding: 0;
  &:active {
    filter: brightness(50%);
  }
  box-shadow: none;
  :focus {
    outline: 0;
  }
  opacity: ${(props) => (props.bubbleImage ? '100%' : ' 30%')};
`;

const HalfBubble = styled(BubbleButton)`
  border-radius: 0%;
  ${(props) => (props.leftHalf ? 'border-top-left-radius: 7.5vh;' : '')}
  ${(props) => (props.leftHalf ? 'border-bottom-left-radius: 7.5vh;' : '')}
  ${(props) => (props.rightHalf ? 'border-top-right-radius: 7.5vh;' : '')}
  ${(props) => (props.rightHalf ? 'border-bottom-right-radius: 7.5vh;' : '')}
  width: 7.5vh;
`;

function BigBubble(props, ref) {
  return (
    <BubbleButton {...props} ref={ref}>
      <BubbleIcon {...props} />
      <BubbleText {...props} top></BubbleText>
    </BubbleButton>
  );
}

export function BackBubble({ onClick, ...props }) {
  return (
    <HalfBubble {...props} onClick={onClick}>
      <BubbleText {...props} small>
        back
      </BubbleText>
    </HalfBubble>
  );
}

export default forwardRef(BigBubble);
