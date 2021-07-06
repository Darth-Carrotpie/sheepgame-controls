import React from 'react';
import styled from 'styled-components';

const BubbleImage = styled.div`
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 25%;
  height: 50%;
  width: 50%;
`;

function BubbleIcon(props) {
  if (!props.bubbleImage) return null;
  return <BubbleImage bckgImg={props.bubbleImage} alt="bubbleImage" />;
}

export default BubbleIcon;
