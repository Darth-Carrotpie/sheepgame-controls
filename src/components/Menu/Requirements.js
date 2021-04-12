import React from 'react';
import styled from 'styled-components';
import ItemName from './ItemName';
import CrownIcon from '../Menu/Vectors/CrownIcon';
import heroIcon from '../../images/menu/LogoHero_256.png';
import { useStateValue } from '../../store/StateContext';

const ImageStyle = styled.div`
  background: url(${(props) => (props.bckgImg ? props.bckgImg : 'none')});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  height: 3vh;
  width: 3vh;
  max-height: 100%;
  max-width: 100%;

  margin-right: 1vh;
  margin-left: 1.5vh;
  align-self: center;
`;

const Wrapper = styled.div`
  /*margin: 1vh 0 1vh 0;*/
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CrownSvgPosition = styled.div`
  margin-right: 1vh;
  margin-left: 1.5vh;
  width: 3vh;
  align-self: center;
`;

export function Requirements(props) {
  const [{ global }] = useStateValue();
  const { isUnlocked, premiumReqMet, crownsReqMet, crownsReq } = props;
  if (isUnlocked)
    return <ItemName nameValue="available" fontSize={12} height={3}></ItemName>;
  const textFirst = `${!premiumReqMet && !crownsReqMet ? ' & ' : ' '}${
    !premiumReqMet && crownsReqMet ? '!' : ' '
  }`;
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
          <CrownSvgPosition>
            <CrownIcon
              color={global.backgroundColor}
              alt="(%crowns)"
            ></CrownIcon>
          </CrownSvgPosition>
        </React.Fragment>
      ) : null}
      <ItemName nameValue={textSecond} fontSize={12} height={3}></ItemName>
    </Wrapper>
  );
}
export default Requirements;
