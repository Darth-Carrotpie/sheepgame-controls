import React from 'react';
import healthbar from '../images/healthbar.png';

function MatchView() {
  return (
    <img
      src={healthbar}
      alt="healthbar"
      style={{ maxWidth: '100%', maxHeight: '100vh', position: 'absolute' }}
    />
  );
}

export default MatchView;
