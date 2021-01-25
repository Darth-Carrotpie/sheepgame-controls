import React from 'react';

import { useStateValue } from '../../store/StateContext';
import KingSheep from './KingSheep';
import styled from 'styled-components';
import * as kingItems from '../../images/king_items';
import LockedNormal from '../../images/menu/locks/Lock_1.png';
import LockedHero from '../../images/menu/locks/Lock_2.png';

const DEFAULT_SIZE_IN_VH = 30;
const calculatePositionInVh = (positionInPx) => {
  return (positionInPx / 200) * DEFAULT_SIZE_IN_VH;
};

const KingContainer = styled.div`
  width: 100%;
  height: ${calculatePositionInVh(200)}vh;
`;

const Position = styled.div`
  align-items: center;
  margin-top: 6vh;
`;

const KingImage = styled.div`
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CrownImg = styled(KingImage)`
  position: absolute;
  margin-left: ${calculatePositionInVh(45)}vh;
  margin-top: ${calculatePositionInVh(-45)}vh;
  width: ${calculatePositionInVh(150)}vh;
  height: ${calculatePositionInVh(150)}vh;
`;
const CrownLock = styled(KingImage)`
  position: absolute;
  margin-top: ${calculatePositionInVh(-30)}vh;
  margin-left: ${calculatePositionInVh(115)}vh;
  width: ${calculatePositionInVh(60)}vh;
  height: ${calculatePositionInVh(60)}vh;
`;
const StaffImg = styled(KingImage)`
  position: absolute;
  margin-top: ${calculatePositionInVh(-23)}vh;
  margin-left: ${calculatePositionInVh(-70)}vh;
  width: ${calculatePositionInVh(150)}vh;
  height: ${calculatePositionInVh(150)}vh;
`;
const StaffLock = styled(KingImage)`
  position: absolute;
  margin-top: ${calculatePositionInVh(-10)}vh;
  margin-left: ${calculatePositionInVh(-15)}vh;
  width: ${calculatePositionInVh(60)}vh;
  height: ${calculatePositionInVh(60)}vh;
`;
function GetLockImage(unlocked, reqHero, isHero) {
  if (!reqHero && !unlocked) return LockedNormal;
  if (reqHero && !unlocked) return LockedHero;
  return null;
}
const King = (props) => {
  const [{ menu }] = useStateValue();
  return (
    <Position>
      <CrownImg bckgImg={kingItems[menu.hatSpriteName]}></CrownImg>
      {props.showLocks && (
        <CrownLock
          bckgImg={GetLockImage(
            menu.hatUnlocked,
            menu.hatPremiumReq,
            menu.hatPremiumReqMet //`staff${menu.scepterID}`
          )}
        ></CrownLock>
      )}
      <StaffImg bckgImg={kingItems[menu.scepterSpriteName]}></StaffImg>
      {props.showLocks && (
        <StaffLock
          bckgImg={GetLockImage(
            menu.scepterUnlocked,
            menu.scepterPremiumReq,
            menu.scepterPremiumReqMet
          )}
        ></StaffLock>
      )}
      <KingContainer>
        <KingSheep color={menu.playerColor}></KingSheep>
      </KingContainer>
    </Position>
  );
};

export default King;
