export default (state, action) => {
  switch (action.type) {
    case "playerScores":
      return {
        ...state,
        win: action.value,
        scores: action.scores,
        totalScore: action.total
      };
    case "scoreInfoSelected":
      return {
        ...state,
        selectedScore: action.value
      };
    default:
      return state;
  }
};
