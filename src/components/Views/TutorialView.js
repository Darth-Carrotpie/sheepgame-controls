import React from 'react';
import styled from 'styled-components';

import tutorialImages from '../../images/tutorial';
import { useStateValue } from '../../store/StateContext';
import { setTutorialIndex } from '../../store/actions';

const ImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const ButtonPosition = styled.button`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
`;
const AbsoluteImage = styled.img`
  height: 100vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
function TutorialView(props) {
  const [{ menu }, dispatch] = useStateValue();
  const { tutorialIndex } = menu;

  function onClickTutorial() {
    dispatch(setTutorialIndex(tutorialIndex + 1));
    if (tutorialIndex >= tutorialImages.length) {
      dispatch(setTutorialIndex(0));
    }
  }

  return (
    <div>
      <ImageContainer
        bckgImg={
          tutorialImages[tutorialIndex - 1] //menu.tutorialIndex - 1
        }
      >
        <ButtonPosition
          onClick={() => onClickTutorial()}
          {...props}
        ></ButtonPosition>
      </ImageContainer>
    </div>
  );
}

export default TutorialView;
