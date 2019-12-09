import React from 'react';
import win_view from '../../images/win_view.png';

function OnClickArrow(props) {
  var data = { element: "view", value: "back" };
  window.airconsole.message(window.airconsole.SCREEN, data);
}

function UpgradeView() {
  return (
    <div>
      <h2>{"UpgradeView"}</h2>
      <h3>{"upgrade name"}</h3>
      <h3>{"description"}</h3>
      <img
      src={win_view}
      alt="win_view"
      style={{ maxWidth: '100%', maxHeight: '100vh', position: 'absolute' }}
      onClick={() => OnClickArrow()}
      />
    </div>
  );
}

export default UpgradeView;
