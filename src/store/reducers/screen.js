export default (state, action) => {
  switch (action.type) {
    case 'changeScreen':
      return {
        ...state,
        currentScreen: action.newScreen
      };

    default:
      return state;
  }
};
