import React from 'react';

import pic41 from './Vectors/Tpic41';
import BigView from './BaseViews/BigView';

function TutorialSlide4(props) {
  var title = window.airconsole.getTranslation('slide4_title');
  var row1 = window.airconsole.getTranslation('slide4_row1');
  var row2 = window.airconsole.getTranslation('slide4_row2');
  var row3 = window.airconsole.getTranslation('slide4_row3');
  return (
    <div>
      <BigView
        topImage={pic41}
        title={title ? title : 'AIM & LAUNCH'}
        row1={
          row1
            ? row1
            : 'the further away from the ballista you tap, the greater the fly distance will be'
        }
        row2={row2 ? row2 : 'a sheep spawns every few seconds'}
        row3={row3 ? row3 : 'spawn cap increases with every player elimination'}
        row4={''}
      ></BigView>
    </div>
  );
}
export default TutorialSlide4;
