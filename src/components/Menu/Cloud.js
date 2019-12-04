import React from 'react';
import styled from 'styled-components';
import cloudImg from '../images/menu/name_cloud.png';

const wheelSize = 100;

const Wrapper = styled.div`
  margin-top: 300px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NamCloudBackground = styled.div`
  height: ${wheelSize}px;
  width: ${wheelSize*3}px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  opacity: 50%;
`;

const CloudImage = styled.img`
  max-width: ${wheelSize - 40}px;
  margin: 20px;
`;

function NameCloud(props) {
  return (
      <Wrapper>
        <NamCloudBackground>
          <CloudImage src={cloudImg} alt="cloud" />
        </NamCloudBackground>
      </Wrapper>
{/*     <BubbleSpan {...props}>
      <Typography>10</Typography>
    </BubbleSpan> */}
  );
}

export default NameCloud;
