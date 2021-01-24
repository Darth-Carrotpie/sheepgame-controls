import React from 'react';
import styled from 'styled-components';
import PlayAgainSVG from './Backgrounds/PlayAgainSVG';

const PlayAgainButton = styled.img`
  height: 10vh;
  overflow: hidden;
  &:active {
    opacity: 40%;
  }
  :focus {
    outline: 0;
  }
  margin-bottom: -5px;
`;

export default () => {
  return <PlayAgainSVG color="red" />;
};
