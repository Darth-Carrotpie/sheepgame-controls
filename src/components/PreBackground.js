import styled from "styled-components";
import FlexColumn from "./Layout/FlexColumn";

const PreBackgroundWrapper = styled(FlexColumn)`
  height: 100vh;
  /*align-items: center;*/
  justify-content: space-between;
  background: url(${(props) => props.preBckgImage});
  background-color: ${(props) =>
    props.playerColor ? props.playerColor : "#42e7de"};
  background-repeat: no-repeat;
  background-size: cover;
  /*   opacity: 50%; */
`;

export default PreBackgroundWrapper;
