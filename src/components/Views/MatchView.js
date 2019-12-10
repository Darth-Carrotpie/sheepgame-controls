import React from "react";

import Healthbar from "../Match/Healthbar";
import BubbleGroup from "../Match/BubbleGroup";
import ControlWheel from "../Match/ControlWheel";
import Recources from "../Match/Recources";

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
