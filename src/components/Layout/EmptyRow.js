import styled from "styled-components";

const EmptyRow = styled.div`
    height: ${props => props.rowHeight ? props.rowHeight : "1"}vh;
`;

export default EmptyRow;
