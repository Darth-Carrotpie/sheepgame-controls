import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  ${(props) => props.fullscreen && 'height: 100vh'}
  background-color: ${(props) => (props.bckgColor ? props.bckgColor : '#f0f0')};
  z-index: inherit;
`;

export default FlexColumn;
