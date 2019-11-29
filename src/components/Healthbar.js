import React from 'react';
import healthbar from '../images/healthbar.png';

function Healthbar() {
  return (
    <img
      src={healthbar}
      alt="healthbar"
      style={{ maxWidth: '100%', maxHeight: '100vh', position: 'absolute' }}
    />
  );
}

export default Healthbar;
