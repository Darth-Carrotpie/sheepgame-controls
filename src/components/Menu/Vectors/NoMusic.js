import React from 'react';
const NoMusic = ({ color }) => {
  var stroke = '#F0F';
  if (color != null) {
    stroke = color;
  }

  return (
    <svg
      id="b0fca8c9-76a0-4c20-a65a-f10db1472f14"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <title>controler_audio_icons</title>
      <path d="M41.5,27.07c-9.07,0-16.5,4.24-16.5,9.43v6.29H23.43A9.45,9.45,0,0,0,14,52.21V75.79a9.45,9.45,0,0,0,9.43,9.42H25V91.5c0,5.19,7.43,9.43,16.5,9.43H58V27.07Z" />
      <rect
        x="54.11"
        y="17"
        width="52"
        height="3"
        rx="1.5"
        transform="translate(10.38 62.06) rotate(-45)"
      />
      <rect x="61.28" y="62" width="52" height="3" rx="1.5" />
      <rect
        x="58"
        y="36"
        width="52"
        height="3"
        rx="1.5"
        transform="translate(-7.5 47.02) rotate(-30)"
      />
      <rect
        x="54.11"
        y="108"
        width="52"
        height="3"
        rx="1.5"
        transform="translate(100.89 -24.57) rotate(45)"
      />
      <rect
        x="58"
        y="89"
        width="52"
        height="3"
        rx="1.5"
        transform="matrix(0.87, 0.5, -0.5, 0.87, 56.5, -29.88)"
      />
    </svg>
  );
};

export default NoMusic;
