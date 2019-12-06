import React from 'react';
import healthbar from '../../images/match/healthbar_background.png';

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
