import React from 'react';

import coin from './Vectors/icon_coin';
import crown from './Vectors/icon_GREED';
import target from './Vectors/icon_target';
import ListView from './BaseViews/ListView';

function TutorialSlide2(props) {
  return (
    <div>
      <ListView
        title={'EARN GOLD'}
        image1={coin}
        row1={"for each opponent's sheep elimination"}
        image2={target}
        row2={"by hitting opponent's king. consecutive hits build multiplier"}
        image3={crown}
        row3={'greedy sheep periodically steals gold for you'}
        row4={'spend gold on abilities and upgrades'}
      ></ListView>
    </div>
  );
}
export default TutorialSlide2;
