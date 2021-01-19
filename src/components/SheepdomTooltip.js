import ReactTooltip from 'react-tooltip';
import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;

const SheepdomTooltip = ({ color }) => {
  return (
    <ReactTooltip
      id="item_info"
      type="warning"
      effect="solid"
      //globalEventOff="click"
      textColor="#FF4F8BFF"
      backgroundColor="#000"
      getContent={(dataTip) => `${dataTip}`}
    />
  );
};

export default SheepdomTooltip;
