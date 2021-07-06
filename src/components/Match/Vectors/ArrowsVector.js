import React from 'react';
const ArrowsVec = ({ color }) => {
  var filler = 'none';
  var stroke = 'none';
  if (color != null) {
    stroke = color;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 605 605">
      <title>Arrows</title>
      <g id="b062f1f2-d981-4ff8-94b5-e25dfce2ec22" data-name="Layer 2">
        <g id="a400f177-a748-41c7-bdd0-9dbc9f787edf" data-name="Layer 1">
          <polyline
            points="279.3 23.19 316.38 3 351.23 26.83"
            fill={filler}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <polyline
            points="325.7 581.81 288.62 602 253.77 578.17"
            fill={filler}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <polyline
            points="23.19 325.7 3 288.62 26.83 253.77"
            fill={filler}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <polyline
            points="581.81 279.3 602 316.38 578.17 351.23"
            fill={filler}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <polyline
            points="88.59 121.4 100.53 80.91 142.03 73.11"
            fill={filler}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <polyline
            points="516.41 483.6 504.46 524.09 462.97 531.88"
            fill={filler}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <polyline
            points="121.4 516.41 80.91 504.46 73.11 462.97"
            fill={filler}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <polyline
            points="483.6 88.59 524.09 100.53 531.88 142.03"
            fill={filler}
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <circle cx="302.56" cy="301.23" r="12.38" fill={stroke} />
        </g>
      </g>
    </svg>
  );
};

export default ArrowsVec;
