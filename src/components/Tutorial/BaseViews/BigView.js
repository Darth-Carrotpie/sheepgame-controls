import React from 'react';
import styled from 'styled-components';
import NotoSans from '../../../fonts/NotoSans-Bold.ttf';

const ImageContainer = styled.div`
  width: 70%;
  /*   background-color: orange;
  opacity: 50%; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
const BottomImageContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 0vh;
  right: 0vh;
`;
const TextRow = styled.div`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-weight: 750;
  font-size: clamp(
    8px,
    ${(props) => (props.fontSize ? props.fontSize / 4 : 4)}vw,
    32px
  );
  height: ${(props) => (props.height ? props.height : 7)}vh;
  color: ${(props) => (props.textColor ? props.textColor : '#27aae1')};
  width: 70%;
  margin-left: 10%;
  display: flex;
  justify-content: left;
  align-items: left;
  text-align: left;
  line-height: 85%;
  /*   background-color:orange;
  opacity: 50%; */
  align-self: center;
`;
const TextTitle = styled.div`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-weight: 750;
  font-size: clamp(
    8px,
    ${(props) => (props.fontSize ? props.fontSize / 4 : 9)}vw,
    32px
  );
  height: ${(props) => (props.height ? props.height : 4)}vh;
  color: ${(props) => (props.textColor ? props.textColor : '#f7941d')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 85%;
  /*   background-color: red;
  opacity: 50%; */
  align-self: center;
`;
function BigView(props) {
  return (
    <div>
      <TextTitle {...props}>{props.title}</TextTitle>
      <ImageContainer>
        <props.topImage> </props.topImage>
      </ImageContainer>
      <TextRow {...props}>{props.row1}</TextRow>
      <TextRow {...props}>{props.row2}</TextRow>
      <TextRow {...props}>{props.row3}</TextRow>
      <TextRow {...props} textColor={'#f7941d'}>
        {props.row4}
      </TextRow>
      <BottomImageContainer>
        <props.botImage> </props.botImage>
      </BottomImageContainer>
    </div>
  );
}

export default BigView;
