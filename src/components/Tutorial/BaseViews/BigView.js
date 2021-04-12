import React from 'react';
import styled from 'styled-components';
import NotoSans from '../../../fonts/NotoSans-Bold.ttf';

const ImageContainer = styled.div`
  width: clamp(10%, calc(${22}vh + ${22}vw), 70%);
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
  bottom: -2vh;
  right: -2vh;
`;
const TextRow = styled.div`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-family: NotoSans;
  font-weight: 750;
  font-size: clamp(6px, calc(${2}vh + ${2}vw), 32px);
  /*   height: ${9}vh; */
  color: ${(props) => (props.textColor ? props.textColor : '#27aae1')};
  width: calc(70% + ${(props) => (props.botImage ? 0 : 10)}%);
  margin-top: 2vh;
  margin-left: 10%;
  display: flex;
  justify-content: left;
  align-items: left;
  text-align: left;
  line-height: 85%;
  /*   background-color: orange;
  opacity: 50%; */
  align-self: center;
`;
const TextTitle = styled.div`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-family: NotoSans;
  font-weight: 750;
  font-size: clamp(6px, calc(${3}vh + ${3}vw), 36px);
  height: ${4}vh;
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
      {props.botImage ? (
        <BottomImageContainer>
          <props.botImage> </props.botImage>
        </BottomImageContainer>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BigView;
