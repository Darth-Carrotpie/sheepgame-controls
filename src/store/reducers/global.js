export default (state, action) => {
  switch (action.type) {
    case 'backgroundColor':
      return {
        ...state,
        backgroundColor: action.value,
      };

    default:
      return state;
  }
};
