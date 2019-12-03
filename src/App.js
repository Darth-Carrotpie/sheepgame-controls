import React from 'react';
import Router from './components/Router';
import { StateProvider } from './store/StateContext';

function App() {
  return (
    <StateProvider>
      <Router></Router>
    </StateProvider>
  );
}

export default App;
