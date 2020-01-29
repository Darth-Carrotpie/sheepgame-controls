export const selectScoreInfo = value => {
  //console.log("selectScoreInfo input value:", value);
  return {
    type: "selectedScore",
    newSelection: value
  };
};
