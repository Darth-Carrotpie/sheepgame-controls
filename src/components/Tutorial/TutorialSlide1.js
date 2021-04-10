import React from 'react';

import pic11 from './Vectors/Tpic11';
import pic12 from './Vectors/Tpic12';
import BigView from './BaseViews/BigView';

function TutorialSlide1(props) {
  return (
    <div>
      <BigView
        topImage={pic11}
        title={'GOAL'}
        row1={"tap the circle to aim and shoot at an opponent's king"}
        row2={'your sheep will hit the king and eat their grass'}
        row3={'a king without grass can be aliminated when hit'}
        row4={'last king standing wins'}
        botImage={pic12}
      ></BigView>
    </div>
  );
}
export default TutorialSlide1;
