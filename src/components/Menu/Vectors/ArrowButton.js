import React from 'react';
import styled from 'styled-components';

const SvgImage = styled.svg`
  width: 100%;
  height: 100%;
`;

const ArrowButton = ({ color }) => {
  var stroke = '#FFF';
  if (color != null) {
    stroke = color;
  }

  return (
    <SvgImage xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 110">
      <title>Asset 70</title>
      <g id="b07825df-871a-4dca-ace0-142ef2ddd96f" data-name="Layer 2">
        <path
          d="M130,55a32.37,32.37,0,0,0-10.69-24.09h0l-.18-.16q-.51-.46-1-.9L89.67,5.44h0A22.5,22.5,0,0,0,57,36H22.86a22.5,22.5,0,1,0-.36,45h31A22.49,22.49,0,0,0,89,105.14h0l.15-.12c.38-.31.75-.62,1.1-1l27.86-23.91c.37-.3.74-.62,1.1-1l.14-.12h0A32.37,32.37,0,0,0,130,55Z"
          fill={stroke}
        />
      </g>
    </SvgImage>
  );
};

export default ArrowButton;
