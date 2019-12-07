import React from "react";
import styled from "styled-components";
/* import { useStateValue } from '../../store/StateContext'; */

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  color: white;
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export function ItemName(props) {
  /*   const [, dispatch] = useStateValue(); */
  return <Text>{props.nameValue}</Text>;
}
export default ItemName;
