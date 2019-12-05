import React from 'react';
import styled from 'styled-components';
import image from '../../images/menu/arrow.png';
/* import { useStateValue } from '../../store/StateContext'; */

const BackgroundStyle = styled.div`
  width:${props => props.width}vh;
  background-color: black;
  position: relative;
  opacity: 50%;
`;

const ImageStyle = styled.img`
    max-height: 10vh;
`;

function OnClickArrow(props){
  var data = {"element":props.elementMessage, "value":props.valueMessage}
  window.airconsole.message(window.airconsole.SCREEN, data);
}
export function ArrowButton(props) {
/*   const [, dispatch] = useStateValue(); */
  return (
    <BackgroundStyle {...props}>
        <ImageStyle src={image} alt="arrowImage"
        onClick ={() => this.OnClickArrow(props)}
        />
    </BackgroundStyle>
  );
}
export default ArrowButton;
