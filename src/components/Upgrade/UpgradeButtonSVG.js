import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;

const Wave = ({ color }) => {
  return (
    <SvgImage preserveAspectRatio="none" viewBox="0 0 1080 409.06">
      <path
        fill={color}
        d="M0,0V409.06H1080V150.56c-101.73-5.91-212.45-46.67-413.23-46.89C322.13,103.3,189.08,0,0,0Z"
      />
    </SvgImage>
  );
};

export default Wave;
