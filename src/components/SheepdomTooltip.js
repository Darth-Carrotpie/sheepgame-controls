import ReactTooltip from 'react-tooltip';
import React from 'react';
import styled from 'styled-components';
import NerisBlack from '../fonts/NerisBlack.otf';

const SheepdomTooltip = ({ color }) => {
  return (
    <ReactTooltip
      id="item_info"
      type="warning"
      effect="solid"
      globalEventOff="mousedown"
      textColor="#FFF"
      backgroundColor="#4a2f8c"
      getContent={(dataTip) => `${dataTip}`}
    />
    /*.customeTheme {
      @font-face {
        font-family: NerisBlack;
        src: url(${NerisBlack});
      }
      color: #ff6e00 !important;
      background-color: orange !important;
      &.place-top {
      &:after {
      border-top-color: orange !important;
      border-top-style: solid !important;
      border-top-width: 6px !important;
      font-size: '1.2rem';
      font-weight: bold;
      font-family: NerisBlack;
      }*/
  );
};

export default SheepdomTooltip;
