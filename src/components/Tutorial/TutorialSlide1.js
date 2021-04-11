import React from 'react';

import pic11 from './Vectors/Tpic11';
import pic12 from './Vectors/Tpic12';
import BigView from './BaseViews/BigView';

function TutorialSlide1(props) {
  var title = window.airconsole.getTranslation('slide1_title');
  var row1 = window.airconsole.getTranslation('slide1_row1');
  var row2 = window.airconsole.getTranslation('slide1_row2');
  var row3 = window.airconsole.getTranslation('slide1_row3');
  var row4 = window.airconsole.getTranslation('slide1_row4');
  return (
    <div>
      <BigView
        topImage={pic11}
        /*         title={'GOAL'} */
        title={title ? title : 'GOAL'}
        row1={
          row1 ? row1 : "tap the circle to aim and shoot at an opponent's king"
        }
        row2={row2 ? row2 : 'your sheep will hit the king and eat their grass'}
        row3={row3 ? row3 : 'a king without grass can be aliminated when hit'}
        row4={row4 ? row4 : 'last king standing wins'}
        botImage={pic12}
      ></BigView>
    </div>
  );
}
export default TutorialSlide1;
