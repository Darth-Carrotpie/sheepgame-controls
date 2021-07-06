import React from 'react';
import styled from 'styled-components';
import ArrowButtonSVG from '../Menu/Vectors/ArrowButton';
import SendAirConsole from '../AirConsoleHandler';
import { useStateValue } from '../../store/StateContext';

const ImageStyle = styled.div`
  /*background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;*/

  height: clamp(6px, calc(${5}vh + ${7}vw), 200px);
  width: clamp(6px, calc(${5}vh + ${7}vw), 200px);

  ${(props) => props.left && 'transform: rotate(180deg)'};
  &:active {
    filter: brightness(50%);
  }
  margin-right: 3vw;
  margin-left: 3vw;
  z-index: inherit;
`;

function OnClickArrow(props) {
  var data = { element: props.elementMessage, value: props.valueMessage };
  SendAirConsole(data);
}
export function ArrowButton(props) {
  const [{ global }] = useStateValue();
  return (
    <ImageStyle alt="arrowImage" onClick={() => OnClickArrow(props)} {...props}>
      <ArrowButtonSVG color={global.backgroundColor}></ArrowButtonSVG>
    </ImageStyle>
  );
}
export default ArrowButton;
