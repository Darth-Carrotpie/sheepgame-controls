import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../store/StateContext';
import NotoSans from '../../fonts/NotoSans-Bold.ttf';

const Text = styled.span`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-size: ${(props) => (props.small ? '2vh' : '4.5vh')};
  font-weight: bold;
  font-family: NotoSans;
  margin-top: 0%;
  color: ${(props) =>
    props.notEnoughGold
      ? '#620000'
      : props.textColor
      ? props.textColor
      : props.backgroundColor};
  text-align: center;
  position: absolute;
  ${(props) => (props.top ? 'top: -0.5vh;' : '')};
`;

function BubbleText(props) {
  const [{ global }] = useStateValue();
  return <Text {...props} {...global}></Text>;
}

export default BubbleText;
