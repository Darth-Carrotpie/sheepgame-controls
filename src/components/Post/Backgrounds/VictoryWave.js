import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 200%;
  position: absolute;
  z-index: -1;
  top: -10vh;
`;
const VictoryWave = ({ color }) => {
  return (
    <SvgImage preserveAspectRatio="none" viewBox="0 0 1080 830.9">
      <g id="Layer_1" data-name="Layer 1">
        <path
          fill={color}
          d="M1080,811.1c-23.7-8.3-50.4-17-80.4-26.4c-365.4-113.7-500.3-31.9-611,0C302.6,809.5,229.7,842.5,0,827V264.1    c38.4-4.1,76.4-11.2,113.7-21.3c160.9-44.3,338-187.6,550.9-136.6C816.3,142.6,966.1,58.2,1080,0V811.1z"
        />
      </g>
    </SvgImage>
  );
};

export default VictoryWave;
