import React from 'react';
const SmashIcon = ({ color }) => {
  var stroke = '#F0F';
  if (color != null) {
    stroke = color;
  }

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 133.7 135.3"
      space="preserve"
    >
      <title>Smash</title>
      <g id="b6fef26f-af4d-447b-9775-9aa032b2ab66">
        <g id="ad1640c5-9293-41b5-bf3e-8bd08bb08178">
          <path
            fill={'none'}
            stroke={stroke}
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M108.8,66.6c0,0,22.5,17.3,21.9,17.5S104.5,79,104.5,79l13.6,38.9L86.9,92.7L78,132.3L61,97l-19,22.9L44.5,95
			L22,108.8l18.1-29l-22,4.3l14.2-17.5c0,0-29.8-20.8-29.3-21s33.5,8.7,33.5,8.7L22.9,15.4l31.8,23.4L64,3l16.1,33.3l21.5-26
			l-3,26.7L119,24.4l-13.4,28l25.1-1.5l-22.3,15.6"
          />
        </g>
      </g>
    </svg>
  );
};

export default SmashIcon;
