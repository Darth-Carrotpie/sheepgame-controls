import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import grassIcon from '../../images/match/grass_icon.png';
import coinsIcon from '../../images/match/coin_icon.png';
import { useStateValue } from '../../store/StateContext';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

function Recources() {
const [{ match }] = useStateValue();
return (
    <Container>
      <Typography icon={grassIcon} textColor={"#009955"}>{match.currentGrass}</Typography>
      <Typography icon={coinsIcon} textColor={"#ff00ff"}>{match.currentMoney}</Typography>
    </Container>
  );
}

export default Recources;
