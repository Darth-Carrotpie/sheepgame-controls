import React from 'react';
import menu_view from '../../images/menu_view.png';
import { useStateValue } from '../../store/StateContext';
import { changeScreenToMatch } from '../../store/actions';
import { announceReady } from '../../store/actions';
import NameCloud from '../../components/Menu/Cloud';

function MenuView() {
  const [, dispatch] = useStateValue();
  return (
    <img
      src={menu_view}
      alt="menu_view"
      style={{ maxWidth: '100%', maxHeight: '100vh', position: 'absolute' }}
      onClick={() => dispatch(changeScreenToMatch())}
    />
    <div>
      <NameCloud></NameCloud>
    </div>
  );
}

export default MenuView;
