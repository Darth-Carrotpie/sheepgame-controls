import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;

const Wave = ({ color }) => {
  return (
    <SvgImage preserveAspectRatio="none" viewBox="0 0 1080 830.96">
      <path
        fill={color}
        d="M1080,811.08c-23.74-8.27-50.42-17.05-80.37-26.36-365.44-113.66-500.31-31.86-611,0C302.58,809.49,229.73,842.47,0,827V264.13a729.11,729.11,0,0,0,113.71-21.34c160.93-44.29,338-187.64,550.94-136.58C816.34,142.59,966.11,58.24,1080,0Z"
      />
    </SvgImage>
  );
};

export default Wave;
