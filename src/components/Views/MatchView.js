import React from 'react';

import Healthbar from '../Match/Healthbar';
import BubbleGroup from '../Match/BubbleGroup';
import ControlWheel from '../Match/ControlWheel';
import Recources from '../Match/Recources';
import FlexColumn from '../Layout/FlexColumn';

function MatchView() {
  return (
    <div>
      <Healthbar></Healthbar>
      <FlexColumn justifyContent="space-between" fullscreen>
        <Recources></Recources>
        <BubbleGroup></BubbleGroup>
        <ControlWheel></ControlWheel>
      </FlexColumn>
    </div>
  );
}

export default MatchView;
