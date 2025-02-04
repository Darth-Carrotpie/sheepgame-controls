import React from 'react';
import styled from 'styled-components';
import NotoSans from '../../fonts/NotoSans-Bold.ttf';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /*opacity: 50%; */
`;

const Icon = styled.div`
  height: 6vh;
  width: 6vh;
  margin-top: 1vh;
  margin-bottom: -1vh;
`;

export const Text = styled.span`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-family: NotoSans;
  font-size: 6vh;
  /*   font-weight: 100; */
  font-weight: bold;
  margin-top: 0px;
  color: ${(props) => props.textColor};
`;

function TypographyVec(props) {
  return (
    <Wrapper>
      <Icon>
        <props.icon alt="resourceIcon"></props.icon>
      </Icon>
      <Text {...props}></Text>
    </Wrapper>
  );
}

export default TypographyVec;
