import React from 'react';
import menu_view from '../images/menu_view.png';

function MenuView() {
  return (
    <img
      src={menu_view}
      alt="menu_view"
      style={{ maxWidth: '100%', maxHeight: '100vh', position: 'absolute' }}
    />
  );
}

export default MenuView;
