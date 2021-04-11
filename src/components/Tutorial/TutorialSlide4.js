import React from 'react';

import pic41 from './Vectors/Tpic41';
import BigView from './BaseViews/BigView';

function TutorialSlide4(props) {
  return (
    <div>
      <BigView
        topImage={pic41}
        title={'AIM & LAUNCH'}
        row1={
          'the further away from the ballista you tap, the greater the fly distance will be'
        }
        row2={'a sheep spawns every few seconds'}
        row3={'spawn cap increases with every player elimination'}
        row4={''}
      ></BigView>
    </div>
  );
}
export default TutorialSlide4;
