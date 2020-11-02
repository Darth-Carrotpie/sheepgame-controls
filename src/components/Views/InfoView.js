import React from "react";
import styled from "styled-components";

import ItemName from "../../components/Menu/ItemName";
import FlexColumn from "../Layout/FlexColumn";
import FlexRow from "../Layout/FlexRow";

const ImageContainer = styled.div`
  max-height: 100vh;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;
const AbsoluteImage = styled.div`
  height: 100vh;
  background: url(${(props) => props.bckgImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const NamePosition = styled.div`
  position: absolute;
  top: 57vh;
  white-space: pre-wrap;
`;

function InfoView(props) {
  return (
    <div>
      <AbsoluteImage bckgImg={props.infoImg} alt="info"></AbsoluteImage>
      <NamePosition {...props}>
        <FlexRow justifyContent="center">
          <FlexColumn>
            <ItemName
              nameValue={props.infoText}
              fontSize={18}
              height={8}
              playerColor={"white"}
            ></ItemName>
          </FlexColumn>
        </FlexRow>
      </NamePosition>
    </div>
  );
}

export default InfoView;
