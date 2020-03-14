import React from "react";

import { useStateValue } from "../../store/StateContext";
import KingSheep from "./KingSheep";
import styled from "styled-components";
import * as kingItems from "../../images/king_items";
import LockedNormal from "../../images/menu/locks/Lock_1.png";
import LockedHero from "../../images/menu/locks/Lock_2.png";
import UnlockedHero from "../../images/menu/locks/unlocked.png";

const KingContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const Position = styled.div`
  align-items: center;
  margin-top: 7vh;
`;

const CrownImg = styled.img`
  position: absolute;
  margin-left: 45px;
  margin-top: -45px;
  width: 150px;
`;
const CrownLock = styled.img`
  position: absolute;
  margin-top: 30px;
  margin-left: 175px;
  width: 30px;
`;
const StaffImg = styled.img`
  position: absolute;
  margin-top: -23px;
  margin-left: -70px;
  width: 150px;
`;
const StaffLock = styled.img`
  position: absolute;
  margin-top: 30px;
  margin-left: -55px;
  width: 30px;
`;
function GetLockImage(unlocked, reqHero, isHero) {
  if (reqHero && !unlocked) {
    return LockedHero;
  } else {
    if (reqHero && unlocked && isHero) {
      return UnlockedHero;
    } else {
      if (!reqHero && !unlocked) return LockedNormal;
    }
  }
  return;
}
const King = props => {
  const [{ menu }] = useStateValue();
  return (
    <Position>
      <CrownImg src={kingItems[menu.hatSpriteName]}></CrownImg>
      {props.showLocks && (
        <CrownLock
          src={GetLockImage(
            menu.hatUnlocked,
            menu.hatPremiumReq,
            menu.hatPremiumReqMet //`staff${menu.scepterID}`
          )}
        ></CrownLock>
      )}
      <StaffImg src={kingItems[menu.scepterSpriteName]}></StaffImg>
      {props.showLocks && (
        <StaffLock
          src={GetLockImage(
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
