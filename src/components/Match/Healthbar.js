import React from "react";
import styled from "styled-components";

import healthbar from "../../images/match/healthbar_background.png";
import { useStateValue } from "../../store/StateContext";

const ImageContainer = styled.div`
  max-height: 100vh;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;

const AbsoluteImage = styled.img`
  max-height: 100vh;
  margin-top: ${props => 100 - props.size}vh;
`;

function Healthbar() {
  const [
    {
      match: { currentHealth }
    }
  ] = useStateValue();
  return (
    <ImageContainer>
      <AbsoluteImage
        src={healthbar}
        alt="healthbar"
        size={currentHealth}
      ></AbsoluteImage>
      ;
    </ImageContainer>
  );
}

export default Healthbar;
