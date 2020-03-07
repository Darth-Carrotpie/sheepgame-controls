import React from 'react';

import { useStateValue } from '../../store/StateContext';
import KingSheep from './KingSheep';
import styled from 'styled-components';
import * as kingItems from '../../images/king_items';

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

const StaffImg = styled.img`
  position: absolute;
  margin-top: -23px;
  margin-left: -70px;
  width: 150px;
`;

const King = () => {
  const [{ menu }] = useStateValue();
  return (
    <Position>
      <CrownImg src={kingItems[`crown${menu.hat}`]}></CrownImg>
      <StaffImg src={kingItems[`staff${menu.scepter}`]}></StaffImg>
      <KingContainer>
        <KingSheep color={menu.playerColor}></KingSheep>
      </KingContainer>
    </Position>
  );
};

export default King;
