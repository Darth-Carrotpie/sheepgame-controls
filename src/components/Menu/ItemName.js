import React from 'react';
import styled from 'styled-components';
/* import { useStateValue } from '../../store/StateContext'; */

const BackgroundStyle = styled.div`
  width:100%;
  background-color: blue;
  position: relative;
  opacity: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-size: 35px;
  font-weight: 500;
`;
export function ItemName(props) {
/*   const [, dispatch] = useStateValue(); */
  return (
    <BackgroundStyle>
      <Text>{props.nameValue}</Text>
    </BackgroundStyle>
  );
}
export default ItemName;
