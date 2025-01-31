import React from 'react';
import styled from 'styled-components';
import ItemName from '../../components/Menu/ItemName';
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
  const [{ menu, translations }] = useStateValue();
  return (
    <ReadyCloudBackground>
      <ItemName
        nameValue={
          menu.ready ? translations.waiting + '...' : translations.ready
        }
        onClick={OnClickReady}
        fontSize={2}
        playerColor={menu.playerColor ? menu.playerColor : 'black'}
      ></ItemName>
    </ReadyCloudBackground>
  );
}
export default ReadyCloud;
