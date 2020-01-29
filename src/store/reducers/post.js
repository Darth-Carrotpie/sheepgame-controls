export default (state, action) => {
  switch (action.type) {
    case "playerScores":
      return {
        ...state,
        win: action.value,
        scores: action.scores,
        totalScore: action.total
      };
    case "selectedScore":
      //console.log("reducer action.newSelection:", action.newSelection);
      return {
        ...state,
        selectedScore: action.newSelection
      };
    case "playAgain":
      return {
        ...state,
        playAgain: action.value
      };
    default:
      return state;
  }
};
