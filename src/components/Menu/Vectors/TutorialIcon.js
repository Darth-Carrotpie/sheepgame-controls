import React from 'react';
import styled from 'styled-components';
const NoMusic = ({ color }) => {
  var stroke = '#F0F';
  if (color != null) {
    stroke = color;
  }
  const SvgImage = styled.svg`
    width: 100%;
    height: 100%;
  `;
  return (
    <SvgImage
      id="ba4342b4-f0d8-4eba-a710-ac21ee38c0ca"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
    >
      <title>tutoriolIcon</title>
      <path
        d="M48.46,30.13l-6.15,7.75a7.27,7.27,0,0,0-1.61,4.19v.8H26.08v-2a13.66,13.66,0,0,1,3.66-9.89L36,23.62c1.33-1.51,2.4-3.56,2.4-5,0-3.12-1.78-5.44-5.34-5.44-3.75,0-5.35,2.41-5.35,5.62H13.07C13.07,6.69,22.25,0,33,0,43.55,0,53,6.33,53,18.72,53,23.35,51,26.92,48.46,30.13ZM25.9,64V49.65h15V64Z"
        fill={stroke}
      />
    </SvgImage>
  );
};

export default NoMusic;
