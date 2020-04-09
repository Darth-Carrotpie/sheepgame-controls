import React from "react";
import MenuView from "./Views/MenuView";
import MatchView from "./Views/MatchView";
import UpgradeView from "./Views/UpgradeView";
import PostView from "./Views/PostView";
import { useStateValue } from "../store/StateContext";

function Router() {
  const [{ views }] = useStateValue();
  var view = null;
  switch (views.current) {
    case "menu":
      console.log("menu: " + views.current);
      view = <MenuView></MenuView>;
      break;
    case "match":
      console.log("match: " + views.current);
      view = <MatchView></MatchView>;
      break;
    case "upgrade":
      console.log("upgrade: " + views.current);
      view = <UpgradeView></UpgradeView>;
      break;
    case "post":
      console.log("post: " + views.current);
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
