import React from 'react';
import Bubble from './Bubble';
import styled from 'styled-components';

const BubblesInLine = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const FloatingBubbles = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: absolute;
`;

function BubbleGroup() {
  return (
    <div>
      <BubblesInLine>
        <Bubble></Bubble>
        <Bubble></Bubble>
        <FloatingBubbles>
          <Bubble small top={85}></Bubble>
          <Bubble small top="75"></Bubble>
          <Bubble small top="85"></Bubble>
        </FloatingBubbles>
      </BubblesInLine>
    </div>
  );
}

export default BubbleGroup;
