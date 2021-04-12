import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../store/StateContext';
import NotoSans from '../../fonts/NotoSans-Bold.ttf';

const Text = styled.div`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-family: NotoSans;
  font-weight: 750;
  letter-spacing: 2px;
  font-size: 12px;
  font-size: clamp(
    8px,
    ${(props) => (props.fontSize ? props.fontSize / 4 : 1)}vw,
    32px
  );
  height: ${(props) => (props.height ? props.height : 4)}vh;
  /*   font-weight: 500; */
  color: ${(props) =>
    props.playerColor ? props.playerColor : props.backgroundColor};
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 85%;
  /*   background-color:orange;
  opacity: 50%; */
  align-self: center;
`;
export function ItemName(props) {
  const [{ global }] = useStateValue();
  return (
    <Text {...props} {...global}>
      {props.nameValue ? props.nameValue : 'noName'}
    </Text>
  );
}
export default ItemName;
