import React from 'react';
import styled from 'styled-components';
import upgradeImg from '../../images/upgrade/upgrade_button_buy.png';
import { Text } from '../Match/Typography';

const UpgradeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UpgradeButton = styled.img`
  width: 100vw;
  overflow: hidden;
  background-color: ${props => (props.bckgColor ? props.bckgColor : '#0f0')};
`;

const TextPosition = styled(Text)`
  position: absolute;
`;

export default () => {
  return (
    <UpgradeButtonWrapper>
      <UpgradeButton src={upgradeImg} alt="upgrade"></UpgradeButton>
      <TextPosition>upgrade</TextPosition>
    </UpgradeButtonWrapper>
  );
};
