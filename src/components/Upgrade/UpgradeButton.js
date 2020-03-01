import React from "react";
import styled from "styled-components";
import upgradeImg from "../../images/upgrade/upgrade_button_buy.png";

const UpgradeButton = styled.img`
  width: 100vw;
  overflow: hidden;
  background-color: ${props => (props.bckgColor ? props.bckgColor : "#0f0")};
`;

export default () => {
  return <UpgradeButton src={upgradeImg} alt="upgrade"></UpgradeButton>;
};
