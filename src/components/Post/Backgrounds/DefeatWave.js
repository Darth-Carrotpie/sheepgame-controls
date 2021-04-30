import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 250%;
  position: absolute;
  z-index: -1;
  top: -3.5vh;
`;
const DefeatWave = ({ color }) => {
  return (
    <SvgImage preserveAspectRatio="none" viewBox="0 0 2160.27 1313.8">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_4">
          <path
            fill={color}
            d="M0,778.3c217.1,86.3,562.7,355.3,902.2,254.7c385.2-114.1,717,162.4,1013.2,241.8    c84.8,22.7,168.5,34.2,244.6,38.9l0.3-806.2c-93-1.4-202-11.8-313.1-41.6c-296.2-79.4-628-356-1013.2-241.8    C528.1,314.8,217.4,105.5,0,0V778.3z"
          />
        </g>
      </g>
    </SvgImage>
  );
};

export default DefeatWave;
