import React from 'react';
import styled from 'styled-components';
import fullAudioImage from '../../images/menu/controler_audio_icon_FullAudio.png';
import fxOnlyImage from '../../images/menu/controler_audio_icon_NoMusic.png';
import SendAirConsole from '../AirConsoleHandler';
import mutedImage from '../../images/menu/controler_audio_icon_NoAudio.png';

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
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  margin-top: 0%;
  height: 100%;
  width: 100%;
`;

function GetImage(props) {
  switch (props.audioState) {
    case 0:
      return fullAudioImage;
    case 1:
      return fxOnlyImage;
    case 2:
      return mutedImage;
    default:
      return mutedImage;
  }
}
function OnClickAudio() {
  var data = { element: 'audio-button', value: true };
  console.log(data);
  SendAirConsole(data);
}
export function AudioButton(props) {
  if (props.firstOwner)
    return (
      <ButtonStyle onClick={() => OnClickAudio(props)} {...props}>
        <AudioIcon bckgImg={GetImage(props)} alt="audioImage"></AudioIcon>
      </ButtonStyle>
    );
  else return null;
}

export default AudioButton;
