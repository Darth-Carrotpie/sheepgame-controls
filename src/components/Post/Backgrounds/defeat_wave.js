import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;
const DefeatWave = ({ color }) => {
  return (
    <SvgImage viewBox="0 0 2160.27 1313.8">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_4">
          <path
            fill={color}
            d="M0,778.34c217.12,86.33,562.7,355.3,902.15,254.71,385.15-114.14,717,162.41,1013.2,241.82,84.82,22.74,168.46,34.18,244.65,38.93l.27-806.21c-93-1.38-202-11.79-313.12-41.57-296.22-79.41-628.05-356-1013.21-241.82C528.14,314.82,217.35,105.5,0,0Z"
          />
        </g>
      </g>
    </SvgImage>
  );
};

export default DefeatWave;
