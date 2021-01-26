import React from 'react';
import styled from 'styled-components';
import upgradeImg from '../../images/upgrade/upgrade_button_buy.png';
import { Text } from '../Match/Typography';
import NerisBlack from '../../fonts/NerisBlack.otf';

const UpgradeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bckgColor ? props.bckgColor : '#0f0')};
  border-style: none;
  &:active {
    opacity: 40%;
  }
  width: 100vw;
`;
const UpgradeButton = styled.div`
  background: url(${(props) => props.bckgImg});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 40vw;
  width: 100vw;
  overflow: hidden;
  //fix this after changing to svg

  border-style: none;
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
  bottom: 25%;
`;
function UpgradeButtonFunction({ ...props }) {
  return (
    <UpgradeButtonWrapper {...props}>
      <UpgradeButton bckgImg={upgradeImg} alt="upgrade"></UpgradeButton>
      <TextPosition>upgrade</TextPosition>
    </UpgradeButtonWrapper>
  );
}
export default UpgradeButtonFunction;
