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

  height: 20vw;
  width: 20vw;

  max-height: 50px;
  max-width: 100%;
  ${(props) => props.left && 'transform: rotate(180deg)'};
  &:active {
    filter: brightness(50%);
  }
  margin-right: 3vh;
  margin-left: 3vh;
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
