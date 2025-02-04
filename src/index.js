import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameController from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GameController />, document.getElementById('root'));
// eslint-disable-next-line
// const airconsole = new AirConsole();
// eslint-disable-next-line
// eslint-disable-next-line

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
