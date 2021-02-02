import React from 'react';
import styled from 'styled-components';

import tutorialImages from '../../components/Tutorial';
import { useStateValue } from '../../store/StateContext';
import { setTutorialIndex, tutorialSeen } from '../../store/actions';

const ImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /*background: url(${(props) => props.bckgImg});*/
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f1f2f2;
`;
const ButtonPosition = styled.button`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
`;

function TutorialView(props) {
  const [{ menu }, dispatch] = useStateValue();
  const { tutorialIndex } = menu;

  function onClickTutorial() {
    dispatch(setTutorialIndex(tutorialIndex + 1));
    if (tutorialIndex >= tutorialImages.length) {
      dispatch(setTutorialIndex(0));
      dispatch(tutorialSeen());
    }
  }
  const TutImg = tutorialImages[tutorialIndex - 1];
  return (
    <div>
      <ImageContainer
      //bckgImg={
      //  tutorialImages[tutorialIndex - 1] //menu.tutorialIndex - 1
      //}
      >
        <ButtonPosition onClick={() => onClickTutorial()} {...props}>
          <TutImg></TutImg>
        </ButtonPosition>
      </ImageContainer>
    </div>
  );
}

export default TutorialView;
