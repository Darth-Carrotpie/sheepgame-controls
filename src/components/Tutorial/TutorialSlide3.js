import React from 'react';

import grass from './Vectors/Tpic31';
import speed from './Vectors/Tpic32';
import smash from './Vectors/Tpic33';
import ListView from './BaseViews/ListView';
import { useStateValue } from '../../store/StateContext';

function TutorialSlide3(props) {
  const [{ translations }] = useStateValue();

  return (
    <div>
      <ListView
        title={translations.slide3_title}
        image1={grass}
        row1={translations.slide3_row1}
        image2={speed}
        row2={translations.slide3_row2}
        image3={smash}
        row3={translations.slide3_row3}
        row4={translations.slide3_row4}
      ></ListView>
    </div>
  );
}
export default TutorialSlide3;
