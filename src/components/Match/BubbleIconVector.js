import React from 'react';
import styled from 'styled-components';

const BubbleImage = styled.div`
  margin-top: 25%;
  height: 50%;
  width: 50%;
`;

function BubbleIconVector(props) {
  if (!props.bubbleImage) return null;
  return (
    <BubbleImage bg={props.bubbleImage} alt="bubbleImage">
      <props.bubbleImage color={props.iconColor}> </props.bubbleImage>
    </BubbleImage>
  );
}

export default BubbleIconVector;
