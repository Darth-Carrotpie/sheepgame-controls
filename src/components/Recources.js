import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
`;

function Recources() {
  return (
    <Container>
      <Typography icon="🔥">100</Typography>
      <Typography icon="🔥">100</Typography>
      <Typography icon="🔥">100</Typography>
    </Container>
  );
}

export default Recources;
