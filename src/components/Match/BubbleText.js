import React from 'react';
import styled from 'styled-components';
import NerisBlack from '../../fonts/NerisBlack.otf';

const Text = styled.span`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  font-size: 4.5vh;
  font-weight: bold;
  margin-top: 0%;
  color: ${props => (props.textColor ? props.textColor : "white")};
  text-align: center;
  position:absolute;
  top:-0.5vh;
`;

function BubbleText(props) {
  return (
    <Text {...props}></Text>
  );
}

export default BubbleText;
