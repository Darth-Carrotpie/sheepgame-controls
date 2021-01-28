import React from 'react';
import styled from 'styled-components';

import ItemName from '../../components/Menu/ItemName';
import FlexColumn from '../Layout/FlexColumn';
import FlexRow from '../Layout/FlexRow';

const AbsoluteImage = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: 130px;
  max-height: 100vh;
  background-color: #c0eaff;
`;

const NamePosition = styled.div`
  position: absolute;
  top: 57vh;
  white-space: pre-wrap;
`;

function InfoView(props) {
  return (
    <AbsoluteImage>
      <props.infoImg></props.infoImg>
      <NamePosition {...props}>
        <FlexRow justifyContent="center">
          <FlexColumn>
            <ItemName
              nameValue={props.infoText}
              fontSize={18}
              height={8}
              playerColor={'white'}
            ></ItemName>
          </FlexColumn>
        </FlexRow>
      </NamePosition>
    </AbsoluteImage>
  );
}

export default InfoView;
