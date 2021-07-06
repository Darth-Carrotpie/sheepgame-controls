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
  height: 6vh;
`;

const CrownSvgPosition = styled.div`
  margin-right: 1vh;
  margin-left: 1.5vh;
  width: 3vh;
  align-self: center;
`;

export function Requirements(props) {
  const [{ global, translations }] = useStateValue();
  const { isUnlocked, premiumReqMet, crownsReqMet, crownsReq } = props;
  if (isUnlocked)
    return (
      <ItemName
        nameValue={translations.available}
        height={2.5}
        fontSize={0.7}
        playerColor={'#e5e5e5'}
      ></ItemName>
    );
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
      <ItemName
        nameValue={textFirst}
        height={2.5}
        fontSize={0.7}
        playerColor={'#e5e5e5'}
      ></ItemName>
      {!crownsReqMet ? (
        <React.Fragment>
          <CrownSvgPosition>
            <CrownIcon color={'#e5e5e5'} alt="(%crowns)"></CrownIcon>
          </CrownSvgPosition>
        </React.Fragment>
      ) : null}
      <ItemName
        nameValue={textSecond}
        height={2.5}
        fontSize={0.7}
        playerColor={'#e5e5e5'}
      ></ItemName>
    </Wrapper>
  );
}
export default Requirements;
