import React from "react";
import MenuView from "./Views/MenuView";
import MatchView from "./Views/MatchView";
import UpgradeView from "./Views/UpgradeView";
import PostView from "./Views/PostView";
import DetailsView from "./Views/DetailsView";
import { useStateValue } from "../store/StateContext";

function Router() {
  const [{ views }] = useStateValue();

  switch (views.current) {
    case "menu":
      return <MenuView></MenuView>;
    case "match":
      return <MatchView></MatchView>;
    case "upgrade":
      return <UpgradeView></UpgradeView>;
    case "post":
      return <PostView></PostView>;

    default:
      return null;
  }
}
export default Router;
