import ReactTooltip from 'react-tooltip';
import React from 'react';
import { useStateValue } from '../store/StateContext';
import { infoTooltipShown } from '../store/actions';

const SheepdomTooltip = ({ color }) => {
  const [{}, dispatch] = useStateValue();

  return (
    <ReactTooltip
      id="item_info"
      type="warning"
      effect="solid"
      globalEventOff="mousedown"
      textColor="#FFF"
      backgroundColor="#4a2f8c"
      getContent={(dataTip) => `${dataTip}`}
      afterShow={() => {
        dispatch(infoTooltipShown());
      }}
    />
  );
};

export default SheepdomTooltip;
