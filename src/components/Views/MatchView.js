import React from 'react';

import Healthbar from '../Match/Healthbar';
import BubbleGroup from '../Match/BubbleGroup';
import ControlWheel from '../Match/ControlWheel';
import Recources from '../Match/Recources';
import FlexColumn from '../Layout/FlexColumn';
import UpgradeView from '../Match/UpgradeView';
//import match from "../../store/reducers/match";
import { useStateValue } from '../../store/StateContext';

function MatchView() {
  const [{ match }] = useStateValue();
  var upgradeView = null;
  if (match.upgradeIndex > 0) upgradeView = <UpgradeView></UpgradeView>;
  return (
    <div>
      <Healthbar></Healthbar>
      <FlexColumn justifyContent="space-between" fullscreen>
        <Recources></Recources>
        <BubbleGroup></BubbleGroup>
        <ControlWheel></ControlWheel>
      </FlexColumn>
      {upgradeView}
    </div>
  );
}

export default MatchView;
