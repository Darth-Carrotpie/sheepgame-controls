import React from "react";
import InfoView from "./Views/InfoView";
import maxPlayersImg from "../images/controller_toomanyplayers.png";
import inProgressImg from "../images/controller_progress.png";
import loadingImg from "../images/controller_loading.png";

import MenuView from "./Views/MenuView";
import MatchView from "./Views/MatchView";
import UpgradeView from "./Views/UpgradeView";
import PostView from "./Views/PostView";
import { useStateValue } from "../store/StateContext";

function Router() {
  const [{ views }] = useStateValue();
  var view = null;
  switch (views.current) {
    case "loading":
      view = <InfoView infoImg={loadingImg} infoText={"loading"}></InfoView>;
      break;
    case "in_game":
      view = (
        <InfoView
          infoImg={inProgressImg}
          infoText={"game already in progress"}
        ></InfoView>
      );
      break;
    case "max_players":
      view = (
        <InfoView
          opacity={"100%"}
          infoImg={maxPlayersImg}
          infoText={"no thrones available"}
        ></InfoView>
      );
      break;
    case "menu":
      view = <MenuView></MenuView>;
      break;
    case "match":
      view = <MatchView></MatchView>;
      break;
    case "upgrade":
      view = <UpgradeView></UpgradeView>;
      break;
    case "post":
      view = <PostView></PostView>;
      break;
    default:
      view = <MenuView></MenuView>;
  }
  //last solution from here: https://hackernoon.com/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {view}
      {/* Preload */}
      <React.Suspense fallback={null}>
        <div hidden={true}>
          <PostView></PostView>
          <MenuView></MenuView>
          <MatchView></MatchView>
          <UpgradeView></UpgradeView>
        </div>
      </React.Suspense>
    </React.Suspense>
  );
}
export default Router;
