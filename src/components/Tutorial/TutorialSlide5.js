import React from 'react';

import pic5 from './Vectors/Tpic5';
import BigView from './BaseViews/BigView';

function TutorialSlide5(props) {
  return (
    <div>
      <BigView
        topImage={pic5}
        title={'UPGRADE'}
        row1={'you can upgrade a sheep when it is loaded into the ballista'}
        row2={'after upgraded sheep is eliminated it will respawn again'}
        row3={''}
        row4={''}
      ></BigView>
    </div>
  );
}
export default TutorialSlide5;
