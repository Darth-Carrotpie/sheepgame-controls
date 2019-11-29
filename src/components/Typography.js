import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.span`
  margin-bottom: -10px;
`;

const Text = styled.span`
  font-size: 35px;
  font-weight: 500;
`;

function Typography({ children, icon }) {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Text>{children}</Text>
    </Wrapper>
  );
}

export default Typography;
