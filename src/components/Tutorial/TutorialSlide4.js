import React from 'react';

import pic41 from './Vectors/Tpic41';
import BigView from './BaseViews/BigView';
import { useStateValue } from '../../store/StateContext';

function TutorialSlide4(props) {
  const [{ translations }] = useStateValue();
  return (
    <div>
      <BigView
        topImage={pic41}
        title={translations.slide4_title}
        row1={translations.slide4_row1}
        row2={translations.slide4_row2}
        row3={translations.slide4_row3}
        row4={''}
      ></BigView>
    </div>
  );
}
export default TutorialSlide4;
