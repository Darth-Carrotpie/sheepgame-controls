import React from 'react';
import styled from 'styled-components';

import Healthbar from '../Match/Healthbar';
import BubbleGroup from '../Match/BubbleGroup';
import ControlWheel from '../Match/ControlWheel';
import Recources from '../Match/Recources';
import FlexColumn from '../Layout/FlexColumn';
import UpgradeView from '../Match/UpgradeView';
//import match from "../../store/reducers/match";
import { useStateValue } from '../../store/StateContext';

const ContentContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
`;

function MatchView() {
  const [{ match, global }] = useStateValue();
  if (match.showUpgrade != '') return <UpgradeView></UpgradeView>;
  return (
    <div
      onContextMenu={(e) => {
        //this prevents righ-click contentmenu event on long tab to pop up the menu
        e.preventDefault();
      }}
    >
      <ContentContainer {...global}>
        <Healthbar></Healthbar>
        <FlexColumn justifyContent="space-between" fullscreen>
          <Recources></Recources>
          <BubbleGroup></BubbleGroup>
          <ControlWheel></ControlWheel>
        </FlexColumn>
      </ContentContainer>
    </div>
  );
}

export default MatchView;
