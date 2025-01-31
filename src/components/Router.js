import React from 'react';
import InfoView from './Views/InfoView';
import TooManyPlayers from '../images/too_many_players';
import InProgress from '../images/in_progress';
import Loading from '../images/loading';

import MenuView from './Views/MenuView';
import MatchView from './Views/MatchView';
import PostView from './Views/PostView';
import TutorialView from './Views/TutorialView';
import { useStateValue } from '../store/StateContext';

function Router() {
  const [{ views, menu, translations }] = useStateValue();
  var view = null;
  if (menu.tutorialIndex > 0 && menu.tutorialSeen == 0) {
    view = <TutorialView></TutorialView>;
  } else {
    switch (views.current) {
      case 'loading':
        view = (
          <InfoView
            infoImg={Loading}
            infoText={translations.loading}
          ></InfoView>
        );
        break;
      case 'disconnected':
        view = (
          <InfoView
            infoImg={Loading}
            infoText={translations.disconnected}
          ></InfoView>
        );
        break;
      case 'in_game':
        view = (
          <InfoView
            infoImg={InProgress}
            infoText={translations.in_game}
          ></InfoView>
        );
        break;
      case 'max_players':
        view = (
          <InfoView
            opacity={'100%'}
            infoImg={TooManyPlayers}
            infoText={translations.max_players}
          ></InfoView>
        );
        break;
      case 'menu':
        view = <MenuView></MenuView>;
        break;
      case 'match':
        view = <MatchView></MatchView>;
        break;
      case 'post':
        view = <PostView></PostView>;
        break;
      default:
        view = <MenuView></MenuView>;
    }
  }
  //last solution from here: https://hackernoon.com/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d
  /*<React.Suspense fallback={<div>Loading...</div>}>
  {view}
  <React.Suspense fallback={null}>
        <div hidden={true}>
          <PostView></PostView>
          <MenuView></MenuView>
          <MatchView></MatchView>
        </div>
      </React.Suspense>
  </React.Suspense>*/
  return view;
}
export default Router;
