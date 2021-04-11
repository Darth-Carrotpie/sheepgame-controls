import React from 'react';

import pic5 from './Vectors/Tpic5';
import BigView from './BaseViews/BigView';

function TutorialSlide5(props) {
  var title = window.airconsole.getTranslation('slide5_title');
  var row1 = window.airconsole.getTranslation('slide5_row1');
  var row2 = window.airconsole.getTranslation('slide5_row2');
  return (
    <div>
      <BigView
        topImage={pic5}
        title={title ? title : 'UPGRADE'}
        row1={
          row1
            ? row1
            : 'you can upgrade a sheep when it is loaded into the ballista'
        }
        row2={
          row2
            ? row2
            : 'after upgraded sheep is eliminated it will respawn again'
        }
        row3={''}
        row4={''}
      ></BigView>
    </div>
  );
}
export default TutorialSlide5;
