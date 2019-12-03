import React from 'react';
import win_view from '../../images/win_view.png';

function VictoryView() {
  return (
    <img
      src={win_view}
      alt="win_view"
      style={{ maxWidth: '100%', maxHeight: '100vh', position: 'absolute' }}
    />
  );
}

export default VictoryView;
