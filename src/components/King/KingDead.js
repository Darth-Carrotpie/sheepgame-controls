import React from 'react';

import { useStateValue } from '../../store/StateContext';
import styled from 'styled-components';
import * as kingItems from '../../images/king_items';

const Position = styled.div`
  align-items: center;
  margin-top: 7vh;
`;
const KingImage = styled.div`
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const CrownImg = styled(KingImage)`
  position: absolute;
  margin-left: 4vh;
  margin-top: 2vh;
  width: 18vh;
  height: 18vh;
  transform: rotate(90deg);
`;

const StaffImg = styled(KingImage)`
  position: absolute;
  margin-top: 2vh;
  margin-left: -20vh;
  width: 18vh;
  height: 18vh;
  //width: 150px;
  transform: rotate(-90deg);
`;

const KingDead = () => {
  const [{ menu }] = useStateValue();
  return (
    <Position>
      <CrownImg bckgImg={kingItems[menu.hatSpriteName]}></CrownImg>
      <StaffImg bckgImg={kingItems[menu.scepterSpriteName]}></StaffImg>
    </Position>
  );
};

export default KingDead;
