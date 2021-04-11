import React from 'react';

import grass from './Vectors/Tpic31';
import speed from './Vectors/Tpic32';
import smash from './Vectors/Tpic33';
import ListView from './BaseViews/ListView';

function TutorialSlide3(props) {
  return (
    <div>
      <ListView
        title={'ABILITIES'}
        image1={grass}
        row1={'grass protect your king. buy more when in need'}
        image2={speed}
        row2={"upgrade king's speed for stronger defence"}
        image3={smash}
        row3={"are you overrun by oppponent's sheep? smash them away"}
        row4={"each ability use increases it's price"}
      ></ListView>
    </div>
  );
}
export default TutorialSlide3;
