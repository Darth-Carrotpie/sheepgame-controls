import React from "react";
import styled from "styled-components";

import tutorialImages from "../../images/tutorial";
import { useStateValue } from "../../store/StateContext";
import { setTutorialIndex } from "../../store/actions";

const ImageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${props => props.bckgImg});
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
function OnClickTutorial(menu, dispatch) {
  var index = menu.tutorialIndex;
  console.log("tutorialIndex before dispatch: " + index);
  var data = { type: "tutorialIndex", value: 2 };
  dispatch(setTutorialIndex(index + 1)); // neveikia??? blogas action? gal turi but reduceris?
  console.log("tutorialIndex after dispatch: " + index);
  console.log("tutorialImages.length: " + tutorialImages.length);
  if (index > tutorialImages.length) {
    dispatch(setTutorialIndex(0));
  }
}
function TutorialView(props) {
  const [menu, dispatch] = useStateValue();

  return (
    <div>
      <ImageContainer
        bckgImg={
          tutorialImages[1] //menu.tutorialIndex - 1
        }
      >
        <ButtonPosition
          onClick={() => OnClickTutorial(menu, dispatch)}
        ></ButtonPosition>
      </ImageContainer>
    </div>
  );
}

export default TutorialView;
