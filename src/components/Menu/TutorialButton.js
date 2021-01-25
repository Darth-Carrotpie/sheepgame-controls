import React from 'react';
import styled from 'styled-components';
import tutorialIcon from '../../images/menu/tutorial_icon.png';
import { useStateValue } from '../../store/StateContext';
import { setTutorialIndex } from '../../store/actions';
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
  margin-top: 0%;
  height: 100%;
  width: 100%;
`;

export function TutorialButton(props) {
  const [, dispatch] = useStateValue();
  function onClickTutorial() {
    dispatch(setTutorialIndex(1));
  }

  return (
    <ButtonStyle onClick={() => onClickTutorial()} {...props}>
      <IconImage bckgImg={tutorialIcon} alt="tutorialIconImage"></IconImage>
    </ButtonStyle>
  );
}

export default TutorialButton;
