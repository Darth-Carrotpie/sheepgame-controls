import React from 'react';
import styled from 'styled-components';
import TutorialIcon from '../Menu/Vectors/TutorialIcon';
import { useStateValue } from '../../store/StateContext';
import { setTutorialIndex, tutorialSeen } from '../../store/actions';
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

const IconImage = styled.div`
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 5%;
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
  height: 90%;
  width: 90%;
`;

export function TutorialButton(props) {
  const [{ global }, dispatch] = useStateValue();
  function onClickTutorial() {
    dispatch(setTutorialIndex(1));
    dispatch(tutorialSeen(0));
  }

  return (
    <ButtonStyle onClick={() => onClickTutorial()} {...props}>
      <IconImage alt="tutorialIconImage">
        <TutorialIcon color={global.backgroundColor}></TutorialIcon>
      </IconImage>
    </ButtonStyle>
  );
}

export default TutorialButton;
