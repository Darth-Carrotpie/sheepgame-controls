import React from 'react';
import styled from 'styled-components';

import HealthbarVector from './Vectors/HealthbarVector';
//import healthbar from "../../images/match/healthbar_background.png";
import { useStateValue } from '../../store/StateContext';

const ImageContainer = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;

const AbsoluteImage = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  margin-top: -${(props) => 100 - props.size}vh;
`;

function Healthbar() {
  const [
    {
      match: { grass },
    },
  ] = useStateValue();
  return (
    <ImageContainer>
      <AbsoluteImage alt="healthbar" size={grass}>
        <HealthbarVector></HealthbarVector>
      </AbsoluteImage>
    </ImageContainer>
  );
}

export default Healthbar;
