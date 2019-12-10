export const changeScreenToMenu = () => {
  return {
    type: 'changeView',
    current: 'menu'
  };
};

export const changeScreenToMatch = () => {
  return {
    type: 'changeView',
    current: 'match'
  };
};

export const changeScreenToVictory = () => {
  return {
    type: 'changeView',
    current: 'victory'
  };
};

export const changeScreenToLoss = () => {
  return {
    type: 'changeView',
    current: 'loss'
  };
};

export const changeScreen = (value) => {
  return {
    type: 'changeView',
    current: value
  };
};