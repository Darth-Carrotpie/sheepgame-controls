import React from 'react';
import styled from 'styled-components';

import crownYellow from '../../images/post/DV_crown_GAINED_icon.png';
import crownWhite from '../../images/post/DV_crown_icon.png';
import NerisBlack from '../../fonts/NerisBlack.otf';

const Number = styled.span`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  color: '#FFFFFF';
  font-size: 1.6rem;
  font-weight: 1000;
  color: ${(props) => (props.isYellow ? '#f7931e' : 'white')};
  text-shadow: none;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

function GetCrown(isYellow, textInput) {
  if (textInput) {
    if (isYellow) return crownYellow;
    else return crownWhite;
  } else {
    return '';
  }
}

const Crown = styled.div`
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  height: 1.6rem;
  width: 1.6rem;
  margin-top: 0.3rem;
  margin-right: 0.5rem;
`;

function Typography(props) {
  return (
    <Number {...props}>
      <Crown bckgImg={GetCrown(props.isYellow, props.text)}></Crown>{' '}
      {props.text ? props.text : ''}
    </Number>
  );
}

export default Typography;
