import React from 'react';
import menu_view from '../../images/menu_view.png';
import { useStateValue } from '../../store/StateContext';
import { changeScreenToMatch } from '../../store/actions';
import { NameCloud, ReadyCloud } from '../../components/Menu/Cloud';
import KingScreen from '../../components/Menu/King';
import MenuRow from '../../components/Menu/MenuRow';
import ArrowButton from '../../components/Menu/Arrow';
import ItemName from '../../components/Menu/ItemName';

function MenuView() {
  const [{ menu }] = useStateValue();
  const [, dispatch] = useStateValue();
  return (

    <div style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute' }}>
      <img
      src={menu_view}
      alt="menu_view"
      style={{ maxWidth: '100%', maxHeight: '100vh', position: 'absolute' }}
      //onClick={() => dispatch(changeScreenToMatch())}
    />
    <MenuRow>
      <NameCloud></NameCloud>
    </MenuRow>
    <MenuRow>
        <KingScreen></KingScreen>
    </MenuRow>
    <MenuRow>
      <ArrowButton elementMessage={"changeHat"} valueMessage={-1} width={-50}></ArrowButton>
      <ItemName nameValue={menu.currentHat}></ItemName>
      <ArrowButton elementMessage={"changeHat"} valueMessage={1} width={50}></ArrowButton>
    </MenuRow>
    <MenuRow>
      <ArrowButton elementMessage={"changeScepter"} valueMessage={-1} width={-50}></ArrowButton>
      <ItemName nameValue={menu.currentScepter}></ItemName>
      <ArrowButton elementMessage={"changeScepter"} valueMessage={1} width={50}></ArrowButton>
    </MenuRow>
    <MenuRow>
        <ReadyCloud></ReadyCloud>
    </MenuRow>
    </div>
  );
}

export default MenuView;
