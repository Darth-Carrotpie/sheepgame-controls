import React from 'react';
import styled from 'styled-components';
import ItemName from './ItemName';
import crownIcon from '../../images/menu/icon_crown.png';
import heroIcon from '../../images/menu/LogoHero_256.png';

const ImageStyle = styled.div`
  background: url(${(props) => props.bckgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  /*max-height: 20px;*/
  height: 3vh;
  width: 3vh;
  max-width: 100%;
  ${(props) => props.left && 'transform: rotate(180deg)'};
  &:active {
    filter: brightness(50%);
  }
  margin-right: 1.5vh;
  margin-left: 1.5vh;
`;

const Wrapper = styled.div`
  /*margin: 1vh 0 1vh 0;*/
  width: 100%;
  display: flex;
  justify-content: center;
`;

export function Requirements(props) {
  const { isUnlocked, premiumReqMet, crownsReqMet, crownsReq } = props;
  if (isUnlocked)
    return <ItemName nameValue="available" fontSize={12} height={3}></ItemName>;
  const textFirst = `${!premiumReqMet ? 'only' : ' '}${
    !premiumReqMet && !crownsReqMet ? ', ' : ' '
  }${!premiumReqMet && crownsReqMet ? '!' : ' '}`;
  const textSecond = `${!crownsReqMet ? crownsReq : ' '}`;
  return (
    <Wrapper>
      {!premiumReqMet ? (
        <React.Fragment>
          <ImageStyle bckgImg={heroIcon} alt="(%hero)" />
        </React.Fragment>
      ) : null}
      <ItemName nameValue={textFirst} fontSize={12} height={3}></ItemName>
      {!crownsReqMet ? (
        <React.Fragment>
          <ImageStyle bckgImg={crownIcon} alt="(%crowns)" />
        </React.Fragment>
      ) : null}
      <ItemName nameValue={textSecond} fontSize={12} height={3}></ItemName>
    </Wrapper>
  );
}
export default Requirements;
