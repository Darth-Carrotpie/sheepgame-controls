import React from "react";
import styled from "styled-components";
import image from "../../images/menu/arrow.png";
/* import { useStateValue } from '../../store/StateContext'; */

const ImageStyle = styled.img`
  max-height: 40px;
  max-width: 100%;
  ${props => props.left && "transform: rotate(180deg)"};
  &:active {
    filter: brightness(50%);
  }
  margin-right: 3vh;
  margin-left: 3vh;
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
