import React from 'react';

import { useStateValue } from '../../store/StateContext';

import MenuRow from './MenuRow';
import ArrowButton from './Arrow';
import ItemName from './ItemName';
import Requirements from './Requirements';
import EmptyRow from '../Layout/EmptyRow';
import FlexColumn from '../Layout/FlexColumn';

function ItemSelection() {
  const [{ menu }] = useStateValue();

  return (
    <FlexColumn id="FlexColumn">
      <MenuRow>
        <ArrowButton
          elementMessage={'changeHat'}
          valueMessage={-1}
          left
        ></ArrowButton>
        <ItemName nameValue={menu.hatName} fontSize={20} height={4}></ItemName>
        <ArrowButton
          elementMessage={'changeHat'}
          valueMessage={1}
        ></ArrowButton>
      </MenuRow>

      <MenuRow>
        <Requirements
          isUnlocked={menu.hatUnlocked}
          premiumReqMet={menu.hatPremiumReqMet}
          crownsReqMet={menu.hatCrownsReqMet}
          crownsReq={menu.hatCrownsReq}
        ></Requirements>
      </MenuRow>

      <MenuRow>
        <ArrowButton
          elementMessage={'changeScepter'}
          valueMessage={-1}
          left
        ></ArrowButton>
        <ItemName
          nameValue={menu.scepterName}
          fontSize={20}
          height={4}
        ></ItemName>
        <ArrowButton
          elementMessage={'changeScepter'}
          valueMessage={1}
        ></ArrowButton>
      </MenuRow>
      <MenuRow>
        <Requirements
          isUnlocked={menu.scepterUnlocked}
          premiumReqMet={menu.scepterPremiumReqMet}
          crownsReqMet={menu.scepterCrownsReqMet}
          crownsReq={menu.scepterCrownsReq}
        ></Requirements>
      </MenuRow>
    </FlexColumn>
  );
}

export default ItemSelection;
