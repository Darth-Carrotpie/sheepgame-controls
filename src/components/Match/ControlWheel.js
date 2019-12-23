import React from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';

import controlWheelImg from '../../images/match/swipewheel_icon.png';
import { useStateValue } from '../../store/StateContext';

const wheelSize = 60;

const Wrapper = styled.div`
  /*   margin-top: 100px; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /*   background-color: gray; */
  opacity: 60%;
`;

const ControlWheelBackground = styled.div`
  height: 90vw;
  width: 90vw;
  max-height: 55vh;
  max-width: 55vh;
/*   height: ${wheelSize}vh; */
/*   width: 100%; */
  background-color: ${props => (props.bckgColor ? props.bckgColor : 'red')};
  border-radius: 50%;
  position: relative;
/*   opacity: 50%; */

  &:active {
    filter: brightness(50%);
  }
`;

const WheelImage = styled.img`
  height: 90%;
  margin-left: 5%;
  margin-right: 95%;
  padding-top: 5%;
  padding-bottom: 75%;

  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

function ControlWheel() {
  const [{ menu }] = useStateValue();
  const swipeHandlers = useSwipeable({
    onSwiped: eventData => {
      const { event, ...rest } = eventData;
      window.airconsole.message(window.airconsole.SCREEN, rest);
    }
  });

  return (
    <Wrapper {...swipeHandlers}>
      <ControlWheelBackground bckgColor={menu.playerColor}>
        <WheelImage src={controlWheelImg} alt="controlWheel" />
      </ControlWheelBackground>
    </Wrapper>
  );
}

export default ControlWheel;
