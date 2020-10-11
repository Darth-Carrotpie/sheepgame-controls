export const setTutorialIndex = value => {
  console.log("setting tutorial action:" + value);
  return {
    type: "tutorialIndex",
    playerTutorialPage: value
  };
};
