import React from "react";
import styled from "styled-components";

const BubbleImage = styled.img`
  margin-top: 25%;
  height: 50%;
  width: 50%;
`;

function BubbleIcon(props) {
  if (!props.bubbleImage) return null;
  console.log("BubbleIcon:");
  return <BubbleImage src={props.bubbleImage} alt="bubbleImage" />;
}

export default BubbleIcon;
