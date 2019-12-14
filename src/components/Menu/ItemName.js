import React from 'react';
import styled from 'styled-components';
import NerisBlack from '../../fonts/NerisBlack.otf';

const Text = styled.div`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  font-weight: bold;
  font-size: ${props => (props.fontSize ? props.fontSize : 35)}px;
  height: ${props => (props.height ? props.height : 5)}vh;
  /*   font-weight: 500; */
  color: ${props => (props.playerColor ? props.playerColor : 'white')};
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /*   background-color:orange;
  opacity: 50%; */
`;
export function ItemName(props) {
  return <Text {...props}>{props.nameValue ? props.nameValue : 'noName'}</Text>;
}
export default ItemName;
