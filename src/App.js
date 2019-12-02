import load from 'little-loader';
import React, {Component} from 'react';
import MenuView from './components/Views/MenuView';
import MatchView from './components/Views/MatchView';

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
class GameController extends Component {
  constructor(props){
    const airConsUrl = 'https://www.airconsole.com/api/airconsole-latest.js';
    load(airConsUrl, function(err){});
    super(props);
    this.viewState = {
      view: 'main',
      //view 1 state:
      prices:[{upgradeA:0, upgradeB:0, buyGrass:0, buySheep:0, smash:0}],
      coins:0,
      crowns:0,
      health:0,
      grass:0,
    };
  }

  onAirConsoleViewChange(viewName){
    this.setState({
      view: viewName,
    });
  }

  render() {
    
    let status = 'current view: '+ this.state.view;

    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
//export default App;
export default GameController;
