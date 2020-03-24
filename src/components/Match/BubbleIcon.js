import React from 'react';
import styled from 'styled-components';

const BubbleImage = styled.img`
  margin-top: 25%;
  height: 50%;
  width: 50%;
`;

function BubbleIcon(props) {
  if (!props.bubbleImage) return null;
  return <BubbleImage src={props.bubbleImage} alt="bubbleImage" />;
}

export default BubbleIcon;
