export default (state, action) => {
  switch (action.type) {
    case 'translations':
      return {
        ...state,
        ...action.value,
      };
    default:
      return state;
  }
};
