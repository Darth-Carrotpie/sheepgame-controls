export const selectScoreInfo = index => {
  return {
    type: "scoreInfoSelected",
    selectedScore: index
  };
};
