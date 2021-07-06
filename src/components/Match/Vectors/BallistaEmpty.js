import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
`;
const BallistaEmpty = ({}) => {
  return (
    <SvgImage data-name="Layer 1" viewBox="0 0 256 256">
      <title>balista</title>
      <circle cx="128" cy="128.12" r="57.52" fill="#c59c6d" />
      <rect
        x="124.97"
        y="215.17"
        width="6.05"
        height="18.23"
        rx="2.52"
        fill="#998776"
      />
      <rect
        x="103.99"
        y="30.28"
        width="48.02"
        height="184.63"
        rx="20"
        fill="#c8b299"
      />
      <rect x="119.85" y="29.77" width="16.31" height="185.27" fill="#998776" />
      <path
        d="M141.35,27.2h-26.7V59.3h2.63V217.6h21.44V59.3h2.63Zm-7.76,185.27H122.42V59.3h11.17Z"
        fill="#754d25"
      />
      <rect x="121.6" y="53.39" width="12.58" height="14.12" fill="#544842" />
      <path
        d="M127.55,223.38l-23.06-3.72a2.85,2.85,0,0,0-3.3,2.81v7.15a2.85,2.85,0,0,0,3.3,2.81l23.06-3.72a2.72,2.72,0,0,1,.9,0l23.06,3.72a2.85,2.85,0,0,0,3.3-2.81v-7.15a2.85,2.85,0,0,0-3.3-2.81l-23.06,3.72A2.72,2.72,0,0,1,127.55,223.38Z"
        fill="#754d25"
      />
      <polygon
        points="114.44 113.11 9.08 77.08 9.91 74.65 114.86 110.54 141.14 110.51 246.09 74.65 246.92 77.08 141.57 113.08 114.44 113.11"
        fill="#010101"
        stroke="#b4b4b4"
        strokeMiterlimit="10"
      />
      <path
        d="M138.58,111.43H117.42a8.55,8.55,0,0,1-8.44-9.94l4.41-26.81a8.55,8.55,0,0,1,8.44-7.16h12.34a8.55,8.55,0,0,1,8.44,7.16L147,101.49A8.55,8.55,0,0,1,138.58,111.43Z"
        fill="#412312"
      />
      <path
        d="M246.63,67.3c-5.42-9-56.42-24.44-118.54-24.44-60.83,0-111,14.81-118.15,23.87L.55,76.12l8.17,8.17L19.36,73.65,17.68,72C35.32,63.39,78.1,53.39,128.09,53.39c50.7,0,94,10.29,111.14,19l-1.95,2,10,10,8.17-8.17Z"
        fill="#8d633a"
      />
    </SvgImage>
  );
};

export default BallistaEmpty;
