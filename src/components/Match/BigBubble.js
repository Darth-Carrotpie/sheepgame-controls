import React from 'react';
import styled from 'styled-components';
import BubbleText from './BubbleText';

const BubbleButton = styled.button`
  height: 15vh;
  width: 15vh;
  background-color: ${props => (props.bckgColor ? props.bckgColor : '#0f0')};
  border-radius: 50%;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-left: 2vh;
  margin-right: 2vh;
  top: 0vh;
  border: none;
  &:active {
    filter: brightness(50%);
  }
`;

function BigBubble(props) {
  return (
    <BubbleButton {...props}>
      <BubbleText {...props}></BubbleText>
    </BubbleButton>
  );
}

export default BigBubble;
