export const changeScreenToMenu = () => {
  return {
    type: 'changeScreen',
    newScreen: 'menu'
  };
};

export const changeScreenToMatch = () => {
  return {
    type: 'changeScreen',
    newScreen: 'match'
  };
};

export const changeScreenToVictory = () => {
  return {
    type: 'changeScreen',
    newScreen: 'victory'
  };
};

export const changeScreenToLoss = () => {
  return {
    type: 'changeScreen',
    newScreen: 'loss'
  };
};

export const changeScreen = (value) => {
  return {
    type: 'changeScreen',
    newScreen: value
  };
};