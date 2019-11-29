import React from 'react';
import Healthbar from './components/Healthbar';
import Bubble from './components/Bubble';
import BubbleGroup from './components/BubbleGroup';
import ControlWheel from './components/ControlWheel';
import Recources from './components/Recources';

function App() {
  return (
    <div>
      <Healthbar></Healthbar>
      <Recources></Recources>
      <BubbleGroup></BubbleGroup>
      <ControlWheel></ControlWheel>
    </div>
  );
}

export default App;
