import React from 'react';

import pic5 from './Vectors/Tpic5';
import BigView from './BaseViews/BigView';
import { useStateValue } from '../../store/StateContext';

function TutorialSlide5(props) {
  const [{ translations }] = useStateValue();
  return (
    <div>
      <BigView
        topImage={pic5}
        title={translations.slide5_title}
        row1={translations.slide5_row1}
        row2={translations.slide5_row2}
        row3={''}
        row4={''}
      ></BigView>
    </div>
  );
}
export default TutorialSlide5;
