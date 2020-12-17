import React from 'react';
import styled from 'styled-components';
/* import cloudImgReady from "../../images/menu/play_cloud.png"; */
import ItemName from '../../components/Menu/ItemName';
/* import { useStateValue } from '../../store/StateContext'; */
import { useStateValue } from '../../store/StateContext';
import SendAirConsole from '../AirConsoleHandler';

function OnClickReady() {
  var data = { element: 'ready-button', pressed: true };
  SendAirConsole(data);
}

const ReadyCloudBackground = styled.div`
  max-width: 350px;
  height: 15vh;
  &:active {
    filter: brightness(50%);
  }
`;

export function ReadyCloud(props) {
  const [{ menu }] = useStateValue();
  return (
    <ReadyCloudBackground>
      <ItemName
        nameValue={menu.ready ? 'READY' : 'PLAY'}
        onClick={OnClickReady}
        fontSize={45}
        height={15}
        playerColor={menu.playerColor ? menu.playerColor : 'black'}
      ></ItemName>
    </ReadyCloudBackground>
  );
}
export default ReadyCloud;
