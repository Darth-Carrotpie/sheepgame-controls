export const selectScoreInfo = value => {
  console.log("vlaue:", value);
  return {
    type: "selectedScore",
    newSelection: value
  };
};
