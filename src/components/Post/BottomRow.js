import React from 'react';
import styled from 'styled-components';

import crownYellow from '../../images/post/DV_crown_GAINED_icon.png';
import crownWhite from '../../images/post/DV_crown_icon.png';

const BottomRow = styled.div`
  z-index: 1;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 90vw;
`;

const Number = styled.span`
  font-size: 1.5rem;
`;

const Crown = styled.img`
  height: 1rem;
`;

const Text = styled.span`
  font-size: 1.3rem;
`;

export default () => {
  return (
    <BottomRow>
      <Number>
        <Crown src={crownYellow}></Crown> 100
      </Number>
      <Number>
        <Crown src={crownWhite}></Crown> 100
      </Number>
      <Text>play again</Text>
    </BottomRow>
  );
};
