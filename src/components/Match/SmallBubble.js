import React from 'react';
import styled from 'styled-components';
import BubbleText from './BubbleText';

const BubbleSpan = styled.span`
  height: 13vh;
  width: 13vh;
  background-color: ${props => props.bckgColor ? props.bckgColor : "rgba(0, 0, 0, 0.0)"};
  border-radius: 50%;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-left: 2vh;
  margin-right: 2vh;
  margin-bottom: 2vh;
  top: ${props => props.top}vh;
  &:active {
    filter: brightness(50%);
  }
/*   opacity: ${props => props.bubbleOpacity}; */
`;
const BubbleImage = styled.img`
  height: 100%;
  width: 100%;
`;
function SmallBubble(props) {
  return (
    <BubbleSpan {...props}>
      <BubbleImage src={props.bubbleImage} alt="bubbleImage" />
      <BubbleText {...props}></BubbleText>
    </BubbleSpan>
  );
}

export default SmallBubble;
