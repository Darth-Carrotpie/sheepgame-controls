import React from 'react';
const GrassIcon = ({ color }) => {
  var filler = '#9bce76';
  if (color != null) {
    filler = color;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 128.68 107.98"
    >
      <title>Grass</title>
      <g id="bd522eff-ebea-4ed2-aca3-c390727c5aa8" data-name="Layer 2">
        <g id="a2764ca5-915e-4fc9-bf15-b0278f9330d9" data-name="Layer 1">
          <path
            d="M30.18,25.62S2.64,53.16,1.36,68.54-5,105.05,18.65,107s77.5.64,90.32,0,19.85-14.73,19.21-21.78-5-39.71,0-52.52S94.87,77.5,94.87,77.5L128.68,0l-53,54,22.42-43.1L76.94,36.51l2.71-16.65L53.24,54,74.38,6.41,36,44.2l7-21.78L19.93,48.68Z"
            fill={filler}
          />
        </g>
      </g>
    </svg>
  );
};

export default GrassIcon;
