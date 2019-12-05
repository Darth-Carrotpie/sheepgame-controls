import React from 'react';
import styled from 'styled-components';
import kingImg from '../../images/win_view.png';
/* import { useStateValue } from '../../store/StateContext'; */

const Background = styled.div`
  width:100%;
  background-color: black;
  position: relative;
  opacity: 50%;
`;

const KingImage = styled.img`
max-height: 40vh;
margin: auto;
/*   max-height: 200px; */
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
export function KingScreen(props) {
/*   const [, dispatch] = useStateValue(); */
  return (
    <Background>
        <KingImage src={kingImg} alt="king"
        //onClick = { OnClickReady } //dance king?
        />
    </Background>
  );
}

export default KingScreen;
