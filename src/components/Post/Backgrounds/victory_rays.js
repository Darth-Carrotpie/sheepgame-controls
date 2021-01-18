import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;
const VictoryRays = ({ color }) => {
  return (
    <SvgImage viewBox="0 0 2162.45 2326.52">
      <g id="Layer_1" data-name="Layer 1">
        <path
          fill={color}
          d="1184.09 1839.69 1135.08 1422.26 1081.22 963.48 1027.99 1416.9 978.36 1839.69 923.28 2326.52 1239.17 2326.52 1184.09 1839.69"
        />
      </g>
    </SvgImage>
  );
};

export default VictoryRays;
