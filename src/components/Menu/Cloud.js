import React from 'react';
import styled from 'styled-components';
import cloudImg from '../../images/menu/name_cloud.png';
/* import { useStateValue } from '../../store/StateContext'; */

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NamCloudBackground = styled.div`
  width:100%;
  background-color: black;
  position: relative;
  opacity: 50%;
`;

const CloudImage = styled.img`
  max-height: 75px;
  margin: 20px;
`;

function OnClickReady(){
  var data = {"ready-button": "pressed"}
  window.airconsole.message(window.airconsole.SCREEN, data);
}
/* me.airconsole.onMessage = function(from, data) {
  console.log("onMessage", from, data);
}; */
function NameCloud(props) {
/*   const [, dispatch] = useStateValue(); */
  return (
      <Wrapper>
        <NamCloudBackground>
          <CloudImage src={cloudImg} alt="cloud"
            onClick = { OnClickReady }
           />
        </NamCloudBackground>
      </Wrapper>
  );
}

export default NameCloud;
