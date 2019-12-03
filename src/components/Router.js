import React from 'react';
import MenuView from './Views/MenuView';
import MatchView from './Views/MatchView';
import VictoryView from './Views/VictoryView';
import LossView from './Views/LossView';
import { useStateValue } from '../store/StateContext';

function Router() {
  const [{ screen }] = useStateValue();

  switch (screen.currentScreen) {
    case 'menu':
      return <MenuView></MenuView>;
    case 'match':
      return <MatchView></MatchView>;
    case 'victory':
      return <VictoryView></VictoryView>;
    case 'loss':
      return <LossView></LossView>;

    default:
      return null;
  }
}
export default Router;
