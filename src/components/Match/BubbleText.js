import React from 'react';
import styled from 'styled-components';
import NerisBlack from '../../fonts/NerisBlack.otf';

const Text = styled.span`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  font-size: ${props => (props.small ? '1rem' : '1.9rem')};
  font-weight: bold;
  margin-top: 0%;
  color: ${props => (props.textColor ? props.textColor : 'white')};
  text-align: center;
  position: absolute;
  ${props => (props.top ? 'top: -0.5vh;' : '')};
  ${props => (props.leftHalf ? 'margin-left: -3.5vh;' : '')};
  ${props => (props.rightHalf ? 'margin-left: 3.5vh;' : '')};
`;

function BubbleText(props) {
  return <Text {...props}></Text>;
}

export default BubbleText;
