import React from "react";
import styled from "styled-components";
import BubbleText from "./BubbleText";
import BubbleIcon from "./BubbleIcon";

const BubbleButton = styled.button`
  height: 13vh;
  width: 13vh;
  background-color: ${(props) =>
    props.bckgColor ? props.bckgColor : "rgba(0, 0, 0, 0.0)"};
  border-radius: 50%;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-left: 2vh;
  margin-right: 2vh;
  margin-bottom: 2vh;
  top: ${(props) => props.top}vh;
  border: none;
  padding: 0;
  box-shadow: none;
  &:active {
    filter: brightness(50%);
  }
  :focus {
    outline: 0;
  }
/*   opacity: ${(props) => props.bubbleOpacity}; */
`;

function SmallBubble({ onClick, ...props }) {
  return (
    <BubbleButton {...props} onClick={onClick}>
      <BubbleIcon {...props} />
      <BubbleText {...props}></BubbleText>
    </BubbleButton>
  );
}

export default SmallBubble;
