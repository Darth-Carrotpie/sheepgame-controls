import React from 'react';
const UpgradeIcon = ({ color }) => {
  var filler = '#9bce76';
  if (color != null) {
    filler = color;
  }

  return (
    <svg data-name="Layer 1" viewBox="0 0 128 128">
      <title>upgrade_icon</title>
      <path
        d="M108.68,9.43l-5.33,4.15,0,0C96,19.94,92.69,28.77,95,35.32L43.29,75.47l-.72-.93-.94.73L32.18,63.1.46,92.14,21,118.57,57,95,47.4,82.69l.93-.72L47.61,81l51.62-40.1C105,45,114.51,44.06,122.6,38.36l0,0L128,34.25Zm7.93,26.79v0c-4.8,3.28-11.16,2.56-14.51-1.75S99.62,23.8,104,20l0,0,2.7-2.09,12.64,16.27Z"
        fill={filler}
      />
    </svg>
  );
};

export default UpgradeIcon;
