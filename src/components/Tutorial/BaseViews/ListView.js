import React from 'react';
import styled from 'styled-components';
import NotoSans from '../../../fonts/NotoSans-Bold.ttf';

const RowContainer = styled.div`
  width: 70%;
  height: 10vh;
  /*   background-color: orange;
  opacity: 50%; */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5vh;
  margin-bottom: 5vh;
`;
const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 30%;
  bottom: 0vh;
  left: 0vh;
  top: 1vh;
`;
const TextRow = styled.div`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-weight: 750;
  font-size: clamp(6px, calc(${2}vh + ${2}vw), 32px);
  height: ${7}vh;
  color: ${(props) => (props.textColor ? props.textColor : '#27aae1')};
  width: 70%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  margin-top: 2vh;
  margin-left: 22vw;
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
  font-weight: 750;
  font-size: clamp(6px, calc(${3}vh + ${3}vw), 36px);
  /*   height: ${5}vh; */
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
function ListView(props) {
  return (
    <div>
      <TextTitle {...props} textColor={'#27aae1'}>
        {props.title}
      </TextTitle>

      <RowContainer>
        <ImageContainer>
          <props.image1></props.image1>
        </ImageContainer>
        <TextRow {...props}>{props.row1}</TextRow>
      </RowContainer>
      <RowContainer>
        <ImageContainer>
          <props.image2></props.image2>
        </ImageContainer>
        <TextRow {...props}>{props.row2}</TextRow>
      </RowContainer>
      <RowContainer>
        <ImageContainer>
          <props.image3></props.image3>
        </ImageContainer>
        <TextRow {...props}>{props.row3}</TextRow>
      </RowContainer>
      <RowContainer></RowContainer>
      <TextRow {...props} textColor={'#f7941d'}>
        {props.row4}
      </TextRow>
    </div>
  );
}

export default ListView;
