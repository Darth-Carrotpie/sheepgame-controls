import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifyContent};
  width: 100vw;
  position: relative;
`;

export default FlexRow;
