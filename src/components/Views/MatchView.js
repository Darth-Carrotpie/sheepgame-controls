import React from 'react';

import Healthbar from '../Healthbar';
import BubbleGroup from '../BubbleGroup';
import ControlWheel from '../ControlWheel';
import Recources from '../Recources';

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
