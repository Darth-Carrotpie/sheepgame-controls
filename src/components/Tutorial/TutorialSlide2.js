import React from 'react';

import coin from './Vectors/icon_coin';
import crown from './Vectors/icon_GREED';
import target from './Vectors/icon_target';
import ListView from './BaseViews/ListView';
import { useStateValue } from '../../store/StateContext';

function TutorialSlide2(props) {
  const [{ translations }] = useStateValue();
  return (
    <div>
      <ListView
        title={translations.slide2_title}
        image1={coin}
        row1={translations.slide2_row1}
        image2={target}
        row2={translations.slide2_row3}
        image3={crown}
        row3={translations.slide2_row3}
        row4={translations.slide2_row4}
      ></ListView>
    </div>
  );
}
export default TutorialSlide2;
