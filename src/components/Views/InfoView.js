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
const AbsoluteImage = styled.img`
  max-height: 100vh;
`;

const NamePosition = styled.div`
  position: absolute;
  top: 57vh;
  white-space: pre-wrap;
`;

function InfoView(props) {
  return (
    <div>
      <ImageContainer>
        <AbsoluteImage src={props.infoImg} alt="info"></AbsoluteImage>
      </ImageContainer>
      <NamePosition {...props}>
        <FlexRow justifyContent="center">
          <FlexColumn>
            <ItemName
              nameValue={props.infoText}
              fontSize={10}
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
