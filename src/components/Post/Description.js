import React from 'react'; //, { Text, useState }
import styled from 'styled-components';
import NotoSans from '../../fonts/NotoSans-Bold.ttf';
import { useStateValue } from '../../store/StateContext';

const DescriptionStyle = styled.span`
  @font-face {
    font-family: NotoSans;
    src: url(${NotoSans});
  }
  font-family: NotoSans;
  font-size: 2vh;
  letter-spacing: 1px;
  font-weight: 900;
  height: 80px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
function ColorizeText(item) {
  const [{ global }] = useStateValue();
  var outputList = [];
  var stringList = item.description.split(/(\[X\]|\[Y\]|\[S\])/g);
  var i;
  for (i = 0; i < stringList.length; i++) {
    var colr = '';
    if (['[X]', '[Y]'].includes(stringList[i])) {
      colr = '#FFF'; //'#f7931e';
    } else {
      colr = global.backgroundColor;
    }
    outputList.push({ content: stringList[i], color: colr });
  }
  var pluralX = false;
  var pluralY = false;
  for (i = 0; i < outputList.length; i++) {
    if ('[X]' === outputList[i].content) {
      outputList[i].content = item.X;
      if (item.reward > 1) pluralX = true;
      else pluralX = false;
      pluralY = false;
    }
    if ('[Y]' === outputList[i].content) {
      outputList[i].content = item.Y;
      pluralX = false;
      if (item.rewardDelta > 1) pluralY = true;
      else pluralY = false;
      if (item.rewardDelta === 0) outputList[i].content = item.wordDelta;
    }
    if ('[S]' === outputList[i].content) {
      if (pluralY || pluralX) outputList[i].content = 's';
      else outputList[i].content = '';
    }
  }

  return outputList;
}

export function Description({ item }) {
  return (
    <Wrapper>
      <DescriptionStyle>
        {ColorizeText(item).map((item) => {
          return <span style={{ color: item.color }}>{item.content}</span>;
        })}
      </DescriptionStyle>
    </Wrapper>
  );
}
export default Description;
