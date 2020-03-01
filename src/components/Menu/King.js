import React from "react";
import styled from "styled-components";
import { ICONS } from "./constants";
import * as kingItemIcons from "../../images/king_items";

const KingImage = styled.img`
  height: 40vh;
  margin: auto;
  opacity: 50%;
  /*   max-height: 200px; */
  /* margin: 20px; */
`;

export function KingScreen(props) {
  return <KingImage src={kingItemIcons[props.hatID]} alt="king" />; //
}

export default KingScreen;
