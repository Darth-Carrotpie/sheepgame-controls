export default (state, action) => {
  switch (action.type) {
    case 'changeView':
      return {
        ...state,
        current: action.value
      };

    default:
      return state;
  }
};
