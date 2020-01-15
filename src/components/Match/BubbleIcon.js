import React from 'react';
import styled from 'styled-components';

const BubbleImage = styled.img`
  height: 100%;
  width: 100%;
`;

function BubbleIcon(props) {
  return (
      <BubbleImage src={props.bubbleImage} alt="bubbleImage" />
  );
}

export default BubbleIcon;