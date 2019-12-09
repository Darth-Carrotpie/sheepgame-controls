import React from "react";
import styled from "styled-components";
import image from "../../images/menu/arrow.png";
/* import { useStateValue } from '../../store/StateContext'; */

const ImageStyle = styled.img`
  max-height: 45px;
  max-width: 100%;
  ${props => props.left && "transform: rotate(180deg)"};
  &:active {
    filter: brightness(50%);
  }
`;

function OnClickArrow(props) {
  var data = { element: props.elementMessage, value: props.valueMessage };
  window.airconsole.message(window.airconsole.SCREEN, data);
}
export function ArrowButton(props) {
  /*   const [, dispatch] = useStateValue(); */
  return (
    <ImageStyle
      src={image}
      alt="arrowImage"
      onClick={() => OnClickArrow(props)}
      {...props}
    />
  );
}
export default ArrowButton;
