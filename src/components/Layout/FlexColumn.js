import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent};
  ${props => props.fullscreen && 'height: 100vh'}
`;

export default FlexColumn;
