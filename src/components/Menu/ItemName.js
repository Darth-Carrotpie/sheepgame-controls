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
  font-size: clamp(
    6px,
    calc(
      ${(props) => 2 * (props.fontSize ? props.fontSize : 1)}vh +
        ${(props) => 2 * (props.fontSize ? props.fontSize : 1)}vw
    ),
    48px
  );

  /*   height: ${(props) => (props.height ? props.height : 4)}vh; */
  height: 100%;
  /*   font-weight: 500; */
  color: ${(props) =>
    props.playerColor ? props.playerColor : props.backgroundColor};
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 100%;
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
