import React from 'react';
import styled from 'styled-components';

import HealthbarVector from './Vectors/HealthbarVector';
//import healthbar from "../../images/match/healthbar_background.png";
import { useStateValue } from '../../store/StateContext';

const ImageContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  clip-path: inset(${(props) => 100 - props.size}vh 0 0 0);
`;

const AbsoluteImage = styled.div`
  height: 100vh;
  width: 30vw;
  min-width: 130px;
  max-height: 100vh;
`;

function Healthbar() {
  const [
    {
      match: { grass },
    },
  ] = useStateValue();
  return (
    <ImageContainer size={grass}>
      <AbsoluteImage alt="healthbar">
        <HealthbarVector></HealthbarVector>
      </AbsoluteImage>
    </ImageContainer>
  );
}

export default Healthbar;
