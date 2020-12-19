import styled from 'styled-components';

const MenuRow = styled.div`
  display: flex;
  justify-content: center;
  /*   background-color:teal;
  opacity: 50%; */
  background-color: ${(props) => (props.bckgColor ? props.bckgColor : 'none')};
  ${(props) => (props.transparent ? 'opacity: 0.5;' : '')}
`;
export default MenuRow;
