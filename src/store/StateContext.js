import React, { createContext, useContext, useReducer } from 'react';
import mainReducer from './reducers';
import initialState from './initialState';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  return (
  <StateContext.Provider value={useReducer(mainReducer, initialState)}>
    {children}
  </StateContext.Provider>)
};

export const useStateValue = () => useContext(StateContext);
