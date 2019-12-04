import React from 'react';
import Router from './components/Router';
import { StateProvider } from './store/StateContext';
import MessageHandler from './components/MessageHandler';

function App() {
  return (
    <StateProvider>
      <MessageHandler>
        <Router></Router>
      </MessageHandler>
    </StateProvider>
  );
}

export default App;
