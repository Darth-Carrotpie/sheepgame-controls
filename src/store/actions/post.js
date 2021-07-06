export const selectScoreInfo = (value) => {
  return {
    type: 'selectedScore',
    newSelection: value,
  };
};
