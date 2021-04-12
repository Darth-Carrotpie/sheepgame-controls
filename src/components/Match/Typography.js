import React from 'react';
import styled from 'styled-components';
import NotoSans from '../../fonts/NotoSans-Bold.ttf';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /*   background-color:gray;
  opacity: 50%; */
`;

const Icon = styled.div`
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  width: 4vh;
  height: 4vh;
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

function Typography(props) {
  return (
    <Wrapper>
      <Icon bckgImg={props.icon} alt="resourceIcon"></Icon>
      <Text {...props}></Text>
    </Wrapper>
  );
}

export default Typography;
