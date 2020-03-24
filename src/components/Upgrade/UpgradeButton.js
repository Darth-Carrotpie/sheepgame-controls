import React from "react";
import styled from "styled-components";
import upgradeImg from "../../images/upgrade/upgrade_button_buy.png";
import { Text } from "../Match/Typography";
import NerisBlack from "../../fonts/NerisBlack.otf";

const UpgradeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.bckgColor ? props.bckgColor : "#0f0")};
`;
const UpgradeButton = styled.img`
  width: 100vw;
  overflow: hidden;
`;

const TextPosition = styled(Text)`
  @font-face {
    font-family: NerisBlack;
    src: url(${NerisBlack});
  }
  font-family: NerisBlack;
  font-weight: 800;
  color: white;
  position: absolute;
`;
function UpgradeButtonFunction({ onClick, ...props }) {
  return (
    <UpgradeButtonWrapper {...props}>
      <UpgradeButton
        onClick={onClick}
        src={upgradeImg}
        alt="upgrade"
      ></UpgradeButton>
      <TextPosition>upgrade</TextPosition>
    </UpgradeButtonWrapper>
  );
}
export default UpgradeButtonFunction;
