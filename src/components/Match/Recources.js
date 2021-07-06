import React from 'react';
import styled from 'styled-components';
import TypographyVec from './TypographyVector';
import GrassVec from './Vectors/GrassVector';
import CoinsVec from './Vectors/CoinVector';
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
      <TypographyVec icon={GrassVec} textColor={'#739e58'}>
        {Math.round(match.grass * 10) / 10}
      </TypographyVec>
      <TypographyVec icon={CoinsVec} textColor={'#fbb03b'}>
        {Math.round(match.money * 10) / 10}
      </TypographyVec>
    </Container>
  );
}

export default Recources;
