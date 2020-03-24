import React from 'react';
import SheepImages from './assets';

function Sheep({ selectedSheep, color }) {
  const Component = SheepImages[selectedSheep];
  return <Component color={color}></Component>;
}

export default Sheep;
