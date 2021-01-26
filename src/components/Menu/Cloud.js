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
  height: 15vh;
  max-height: 80px;
  &:active {
    filter: brightness(50%);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function ReadyCloud(props) {
  const [{ menu }] = useStateValue();
  return (
    <ReadyCloudBackground>
      <ItemName
        nameValue={menu.ready ? 'waiting...' : 'READY'}
        onClick={OnClickReady}
        fontSize={45}
        playerColor={menu.playerColor ? menu.playerColor : 'black'}
      ></ItemName>
    </ReadyCloudBackground>
  );
}
export default ReadyCloud;
