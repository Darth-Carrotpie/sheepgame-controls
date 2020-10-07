import React from "react";
import SheepImages from "./assets";

function Sheep({ selectedSheep, color }) {
  if (!SheepImages[selectedSheep]) return null;
  const Component = SheepImages[selectedSheep];
  return <Component color={color}></Component>;
}

export default Sheep;
