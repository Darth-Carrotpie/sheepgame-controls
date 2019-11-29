import React from 'react';
import styled from 'styled-components';
import controlWheelImg from '../images/control-wheel.png';

const wheelSize = 300;

const Wrapper = styled.div`
  margin-top: 100px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ControlWheelBackground = styled.div`
  height: ${wheelSize}px;
  width: ${wheelSize}px;
  background-color: red;
  border-radius: 50%;
  position: relative;
  opacity: 50%;
`;

const WheelImage = styled.img`
  max-width: ${wheelSize - 40}px;
  margin: 20px;
`;

function ControlWheel() {
  return (
    <Wrapper>
      <ControlWheelBackground>
        <WheelImage src={controlWheelImg} alt="controlWheel" />
      </ControlWheelBackground>
    </Wrapper>
  );
}

export default ControlWheel;
