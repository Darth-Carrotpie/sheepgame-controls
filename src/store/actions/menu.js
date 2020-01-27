export const setHat = value => {
  return {
    type: "setHat",
    newHat: value
  };
};
export const changeHatNext = () => {
  return {
    type: "changeHat",
    newHat: 1
  };
};
export const changeHatPrevious = () => {
  return {
    type: "changeHat",
    newHat: -1
  };
};
export const setScepter = value => {
  return {
    type: "setScepter",
    newScepter: value
  };
};
export const changeScepterNext = () => {
  return {
    type: "changeScepter",
    newScepter: 1
  };
};
export const changeScepterPrevious = () => {
  return {
    type: "changeScepter",
    newScepter: 1
  };
};
export const announceReady = () => {
  return {
    type: "ready",
    ready: 1
  };
};
export const setColor = value => {
  return {
    type: "color",
    color: value
  };
};
