import React from 'react';
import styled from 'styled-components';
import cloudImgReady from '../../images/menu/play_cloud.png';
import cloudImgPlay from '../../images/menu/name_cloud.png';
/* import { useStateValue } from '../../store/StateContext'; */

const NameCloudBackground = styled.div`
  width:100%;
  background-color: black;
  position: relative;
  opacity: 50%;
`;

const CloudImage = styled.img`
  max-height: 80px;
  /* margin: 20px; */
`;

function OnClickReady(){
  var data = {"element":"ready-button", "pressed":true}
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
        <CloudImage src={cloudImgPlay} alt="cloudPlay"
          //onClick = { OnClickReady } //dance king?
          />
      </NameCloudBackground>
  );
}

const ReadyCloudBackground = styled.div`
  background-color: black;
  opacity: 50%;
  max-height : 20vh;
`;
export function ReadyCloud(props) {
    return (
      <ReadyCloudBackground>
        <CloudImage src={cloudImgReady} alt="cloudRead"
          onClick = { OnClickReady }
          />
      </ReadyCloudBackground>
    );
  }
export default NameCloud;
