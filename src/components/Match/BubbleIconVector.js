import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../store/StateContext';

const BubbleImage = styled.div`
  margin-top: 25%;
  height: 50%;
  width: 50%;
`;

function BubbleIconVector(props) {
  const [{ global }] = useStateValue();
  if (!props.bubbleImage) return null;
  return (
    <BubbleImage bg={props.bubbleImage} alt="bubbleImage">
      <props.bubbleImage
        color={props.iconColor ? props.iconColor : global.backgroundColor}
      >
        {' '}
      </props.bubbleImage>
    </BubbleImage>
  );
}

export default BubbleIconVector;
