import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;

const CrownIcon = ({ color }) => {
  var stroke = '#F0F';
  if (color != null) {
    stroke = color;
  }

  return (
    <SvgImage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.26 54.42">
      <title>Asset 69</title>
      <g id="bda48a9b-0742-415f-8081-e749b40601cd" data-name="Layer 2">
        <g id="bf36a04c-626c-4e4d-9eb2-3bbcf5961822" data-name="other details">
          <polygon
            points="73.26 54.42 0 54.42 0 0 18.31 20.93 36.63 0 54.94 20.93 73.26 0 73.26 54.42"
            fill={stroke}
          />
        </g>
      </g>
    </SvgImage>
  );
};

export default CrownIcon;
