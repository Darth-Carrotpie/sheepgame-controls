import React from 'react';
const Icon = ({ color }) => {
  var filler = '#0071bc';
  if (color != null) {
    filler = color;
  }

  return (
    <svg viewBox="0 0 218.6 218.6">
      <title>achievemen_ icon</title>
      <path
        d="M167.21,136.64c-5.85,16.46-22.44,29-61.09,29-33.92,0-54.53-12.82-61.1-29L43,110l63.1,36,63.09-36Z"
        fill={filler}
      />
      <ellipse cx="193.97" cy="98.2" rx="1.43" ry="2.85" fill={filler} />
      <ellipse cx="193.97" cy="104.92" rx="1.43" ry="2.85" fill={filler} />
      <ellipse cx="193.97" cy="111.65" rx="1.43" ry="2.85" fill={filler} />
      <ellipse cx="193.97" cy="118.38" rx="1.43" ry="2.85" fill={filler} />
      <ellipse cx="193.97" cy="125.1" rx="1.43" ry="2.85" fill={filler} />
      <path
        d="M196.57,131.83c-.38-.93-1.28-2.85-2.85-2.85s-2.49,1.91-2.86,2.85c-1.31,3.36-3.56,11.69-3.56,11.69l7,2,6.37-2S198,135.21,196.57,131.83Z"
        fill={filler}
      />
      <path
        d="M106.12,99a2.85,2.85,0,1,1,0-5.7,2.82,2.82,0,0,1,2.68,1.92l83.77-4.81L106.12,53,18,91.12l88.16,48.16,86.37-47.19-83.64,4.79A2.83,2.83,0,0,1,106.12,99Z"
        fill={filler}
      />
    </svg>
  );
};

export default Icon;
