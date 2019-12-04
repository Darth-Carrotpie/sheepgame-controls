export const changeHatNext = () => {
  return {
    type: 'changeHat',
    newHat: 1
  };
};
export const changeHatPrevious = () => {
  return {
    type: 'changeHat',
    newHat: -1
  };
};
export const changeScepterNext = () => {
  return {
    type: 'changeScepter',
    newScepter: 1
  };
};
export const changeHatPrevious = () => {
  return {
    type: 'changeScepter',
    newScepter: 1
  };
};
export const announceReady = () => {
  return {
    type: 'ready',
    ready: 1
  };
};