import React from 'react';
import SheepImages from './assets';

function Sheep(props) {
  const Component = SheepImages[props.selectedSheep];
  return <Component></Component>;
}

export default Sheep;
