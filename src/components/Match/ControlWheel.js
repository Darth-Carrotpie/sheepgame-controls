import React from 'react';
import styled from 'styled-components';
import controlWheelImg from '../../images/match/swipewheel_icon.png';

const wheelSize = 60;

const Wrapper = styled.div`
/*   margin-top: 100px; */
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: gray;
  opacity: 50%;
`;

const ControlWheelBackground = styled.div`
  height: 55vh;
  width: 55vh;
  margin-top: -1vh;
/*   height: ${wheelSize}vh; */
/*   width: 100%; */
  background-color: red;
  border-radius: 50%;
  position: relative;
  opacity: 50%;
`;

const WheelImage = styled.img`

  height: 90%;
  margin-left: 5%;
  margin-right: 95%;
  padding-top: 5%;
  padding-bottom: 75%;

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
