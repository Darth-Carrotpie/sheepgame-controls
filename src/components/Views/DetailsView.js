import React from "react";
import win_view from "../../images/win_view.png";
import SendAirConsole from "../AirConsoleHandler";

function OnClickArrow(props) {
  var data = { element: "view", value: "back" };
  SendAirConsole(data);
}

function DetailsView() {
  return (
    <div>
      <h2>{"DetailsView"}</h2>
      <h3>{"score/reward name"}</h3>
      <h3>{"description how player got it"}</h3>
      <img
        src={win_view}
        alt="win_view"
        style={{ maxWidth: "100%", maxHeight: "100vh", position: "absolute" }}
        onClick={() => OnClickArrow()}
      />
    </div>
  );
}

export default DetailsView;
