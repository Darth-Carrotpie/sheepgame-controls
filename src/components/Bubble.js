import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';

const sizes = {
  big: 75,
  small: 55
};

const BubbleSpan = styled.span`
  height: ${props => (props.small ? sizes.small : sizes.big)}px;
  width: ${props => (props.small ? sizes.small : sizes.big)}px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 5px;
  top: ${props => props.top}px;
`;

function Bubble(props) {
  return (
    <BubbleSpan {...props}>
      <Typography>10</Typography>
    </BubbleSpan>
  );
}

export default Bubble;
