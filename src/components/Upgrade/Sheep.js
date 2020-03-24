import React from "react";
import * as sheepImages from "./assets";
import styled from "styled-components";

const Icon = styled.img``;

function Sheep(props) {
  return <Icon src={sheepImages[props.selectedSheep]}></Icon>;
}

export default Sheep;
