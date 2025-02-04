import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../store/StateContext';
import UpgradeSVG from './UpgradeButtonSVG';
import { Text } from '../Match/Typography';
import NotoSans from '../../fonts/NotoSans-Bold.ttf';

const UpgradeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#0f0'};
  border-style: none;
  &:active {
    opacity: 40%;
  }
  width: 100vw;
`;
const UpgradeButton = styled.div`
  background-color: none;
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
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-family: NotoSans;
  font-weight: 800;
  color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  position: absolute;
  bottom: 25%;
`;
function UpgradeButtonFunction({ ...props }) {
  const [{ global, translations }] = useStateValue();
  return (
    <UpgradeButtonWrapper {...props} {...global}>
      <UpgradeButton alt="upgrade">
        <UpgradeSVG color={props.buttonColor}></UpgradeSVG>
      </UpgradeButton>
      <TextPosition {...global}>{translations.upgrade}</TextPosition>
    </UpgradeButtonWrapper>
  );
}
export default UpgradeButtonFunction;
