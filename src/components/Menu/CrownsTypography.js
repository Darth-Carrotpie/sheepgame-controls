import React from "react";
import styled from "styled-components";

import crownYellow from "../../images/post/DV_crown_GAINED_icon.png";
import crownWhite from "../../images/post/DV_crown_icon.png";

const Number = styled.span`
  color: "#FFFFFF";
  font-size: 1.6rem;
  font-weight: 1000;
  color: ${props => (props.isYellow ? "#f7931e" : "white")};
  text-shadow: none;
`;

function GetCrown(isYellow, textInput) {
  if (textInput) {
    if (isYellow) return crownYellow;
    else return crownWhite;
  } else {
    return "";
  }
}

const Crown = styled.img`
  height: 1rem;
`;

function Typography(props) {
  return (
    <Number {...props}>
      <Crown src={GetCrown(props.isYellow, props.text)}></Crown>{" "}
      {props.text ? props.text : ""}
    </Number>
  );
}

export default Typography;
