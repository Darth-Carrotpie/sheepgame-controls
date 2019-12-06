import React from 'react';
import styled from 'styled-components';
import BubbleText from './BubbleText';

const BubbleSpan = styled.span`
  height: 15vh;
  width: 15vh;
  background-color: ${props => props.bckgColor};
  border-radius: 50%;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-left: 2vh;
  margin-right: 2vh;
  top: ${props => props.top}vh;
`;

function BigBubble(props) {
  return (
    <BubbleSpan {...props}>
      <BubbleText {...props}></BubbleText>
    </BubbleSpan>
  );
}

export default BigBubble;
