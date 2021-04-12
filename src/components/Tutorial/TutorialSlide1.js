import React from 'react';

import pic11 from './Vectors/Tpic11';
import pic12 from './Vectors/Tpic12';
import BigView from './BaseViews/BigView';
import { useStateValue } from '../../store/StateContext';

function TutorialSlide1(props) {
  const [{ translations }] = useStateValue();
  return (
    <div>
      <BigView
        topImage={pic11}
        /*         title={'GOAL'} */
        title={translations.slide1_title}
        row1={translations.slide1_row1}
        row2={translations.slide1_row2}
        row3={translations.slide1_row3}
        row4={translations.slide1_row4}
        botImage={pic12}
      ></BigView>
    </div>
  );
}
export default TutorialSlide1;
