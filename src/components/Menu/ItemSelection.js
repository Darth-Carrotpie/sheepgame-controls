import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../../store/StateContext';

import MenuRow from './MenuRow';
import ArrowButton from './Arrow';
import ItemName from './ItemName';
import Requirements from './Requirements';
import FlexColumn from '../Layout/FlexColumn';

const ItemsRow = styled.div`
  height: 5vh;
`;

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
        <FlexColumn id="FlexColumn">
          <ItemName
            nameValue={menu.hatName}
            fontSize={20}
            height={5}
          ></ItemName>
          <Requirements
            isUnlocked={menu.hatUnlocked}
            premiumReqMet={menu.hatPremiumReqMet}
            crownsReqMet={menu.hatCrownsReqMet}
            crownsReq={menu.hatCrownsReq}
          ></Requirements>
        </FlexColumn>
        <ArrowButton
          elementMessage={'changeHat'}
          valueMessage={1}
        ></ArrowButton>
      </MenuRow>

      <MenuRow>
        <ArrowButton
          elementMessage={'changeScepter'}
          valueMessage={-1}
          left
        ></ArrowButton>
        <FlexColumn id="FlexColumn">
          <ItemName
            nameValue={menu.scepterName}
            fontSize={20}
            height={5}
          ></ItemName>
          <Requirements
            isUnlocked={menu.scepterUnlocked}
            premiumReqMet={menu.scepterPremiumReqMet}
            crownsReqMet={menu.scepterCrownsReqMet}
            crownsReq={menu.scepterCrownsReq}
          ></Requirements>
        </FlexColumn>
        <ArrowButton
          elementMessage={'changeScepter'}
          valueMessage={1}
        ></ArrowButton>
      </MenuRow>
    </FlexColumn>
  );
}

export default ItemSelection;
