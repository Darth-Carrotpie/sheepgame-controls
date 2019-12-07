import React from "react";

import Healthbar from "../Match/Healthbar";
import BubbleGroup from "../Match/BubbleGroup";
import ControlWheel from "../Match/ControlWheel";
import Recources from "../Match/Recources";
import match_view from "../../images/match_view.jpg";

function MatchView() {
  return (
    <div>
      <Healthbar></Healthbar>
      <Recources></Recources>
      <BubbleGroup></BubbleGroup>
      <ControlWheel></ControlWheel>
    </div>
  );
}

export default MatchView;
