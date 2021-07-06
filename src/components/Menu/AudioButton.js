import React from 'react';
import styled from 'styled-components';
import FullAudio from './Vectors/FullAudio';
import NoMusic from './Vectors/NoMusic';
import SendAirConsole from '../AirConsoleHandler';
import NoAudio from './Vectors/NoAudio';

const ButtonStyle = styled.button`
  height: 7vh;
  width: 7vh;
  border: 0px;
  border-radius: 100%;
  padding: 0;
  background-color: ${(props) =>
    props.playerColor ? props.playerColor : 'white'};
  align-items: left;

  &:active {
    filter: brightness(50%);
  }
  box-shadow: none;
  :focus {
    outline: 0;
  }
  margin-top: 1vh;
  margin-left: 1vh;
`;

const AudioIcon = styled.div`
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
  height: 90%;
  width: 90%;
`;

function GetImage(props) {
  switch (props.audioState) {
    case 0:
      return FullAudio;
    case 1:
      return NoMusic;
    case 2:
      return NoAudio;
    default:
      return NoAudio;
  }
}
function OnClickAudio() {
  var data = { element: 'audio-button', value: true };
  SendAirConsole(data);
}
export function AudioButton(props) {
  var IconImage = GetImage(props);
  if (props.firstOwner)
    return (
      <ButtonStyle onClick={() => OnClickAudio(props)} {...props}>
        <AudioIcon>
          <IconImage alt="audioImage"></IconImage>
        </AudioIcon>
      </ButtonStyle>
    );
  else return null;
}

export default AudioButton;
