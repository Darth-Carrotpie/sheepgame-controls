import React from "react";
import styled from "styled-components";
import cloudImgReady from "../../images/menu/play_cloud.png";
import cloudImgPlay from "../../images/menu/name_cloud.png";
/* import { useStateValue } from '../../store/StateContext'; */

const NameCloudBackground = styled.div`
  /* background-color: black; */
  /* position: relative; */
  /* opacity: 50%; */
  max-width: 350px;
`;

const CloudImage = styled.img`
  max-width: 100%;
`;

function OnClickReady() {
  var data = { element: "ready-button", pressed: true };
  window.airconsole.message(window.airconsole.SCREEN, data);
}

/* var backgroundColor = '#000000'
window.airconsole.onMessage = funcion(from, data){
  backgroundColor = '#'+data['color'];
} */
export function NameCloud(props) {
  /*   const [, dispatch] = useStateValue(); */
  return (
    <NameCloudBackground>
      <CloudImage
        src={cloudImgPlay}
        alt="cloudPlay"
        //onClick = { OnClickReady } //dance king?
      />
    </NameCloudBackground>
  );
}

const ReadyCloudBackground = styled.div`
  /* background-color: black;
  opacity: 50%; */
  max-width: 350px;
`;
export function ReadyCloud(props) {
  return (
    <ReadyCloudBackground>
      <CloudImage src={cloudImgReady} alt="cloudRead" onClick={OnClickReady} />
    </ReadyCloudBackground>
  );
}
export default NameCloud;
