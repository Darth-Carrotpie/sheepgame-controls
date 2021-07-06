import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../../../store/StateContext';

const SvgImage = styled.svg`
  width: 100%;
  bottom: 0;
  height: 20vh;
  position: absolute;
  max-height: 150px;
`;
const GrayDownside = () => {
  const [{ global }] = useStateValue();
  return (
    <SvgImage preserveAspectRatio="none" viewBox="0 0 2160.3 600.8">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_4">
          <path
            fill={global.backgroundColor} //"#999999"
            d="M0,0c132.5,26,229.8,68,319.3,93.8c221.4,63.7,399,154.6,1256.1,31.5c258.2-37.1,447-61.9,584.9-78.6    l-0.3,554.1H0V0z"
          />
        </g>
      </g>
    </SvgImage>
  );
};

export default GrayDownside;
