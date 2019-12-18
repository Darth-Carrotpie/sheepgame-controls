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
      <Typography icon={grassIcon} textColor={"#739e58"}>{Math.round( match.grass * 10) / 10 }</Typography>
      <Typography icon={coinsIcon} textColor={"#fbb03b"}>{Math.round( match.money * 10) / 10 }</Typography>
    </Container>
  );
}

export default Recources;
