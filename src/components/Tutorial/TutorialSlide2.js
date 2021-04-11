import React from 'react';

import coin from './Vectors/icon_coin';
import crown from './Vectors/icon_GREED';
import target from './Vectors/icon_target';
import ListView from './BaseViews/ListView';

function TutorialSlide2(props) {
  var title = window.airconsole.getTranslation('slide2_title');
  var row1 = window.airconsole.getTranslation('slide2_row1');
  var row2 = window.airconsole.getTranslation('slide2_row2');
  var row3 = window.airconsole.getTranslation('slide2_row3');
  var row4 = window.airconsole.getTranslation('slide2_row4');
  return (
    <div>
      <ListView
        title={title ? title : 'EARN GOLD'}
        image1={coin}
        row1={row1 ? row1 : "for each opponent's sheep elimination"}
        image2={target}
        row2={
          row2
            ? row2
            : "by hitting opponent's king. consecutive hits build multiplier"
        }
        image3={crown}
        row3={row3 ? row3 : 'greedy sheep periodically steals gold for you'}
        row4={row4 ? row4 : 'spend gold on abilities and upgrades'}
      ></ListView>
    </div>
  );
}
export default TutorialSlide2;
