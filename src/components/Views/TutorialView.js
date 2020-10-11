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
    console.log('tutorialIndex before dispatch: ' + tutorialIndex);
    var data = { type: 'tutorialIndex', value: 2 };
    dispatch(setTutorialIndex(tutorialIndex + 1)); // neveikia??? blogas action? gal turi but reduceris?
    console.log('tutorialIndex after dispatch: ' + tutorialIndex);
    console.log('tutorialImages.length: ' + tutorialImages.length);
    if (tutorialIndex > tutorialImages.length) {
      dispatch(setTutorialIndex(0));
    }
  }

  return (
    <div>
      <ImageContainer
        bckgImg={
          tutorialImages[tutorialIndex] //menu.tutorialIndex - 1
        }
      >
        <ButtonPosition onClick={() => onClickTutorial()}></ButtonPosition>
      </ImageContainer>
    </div>
  );
}

export default TutorialView;
