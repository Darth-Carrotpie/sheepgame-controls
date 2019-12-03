import screenReducer from './screen';

export default ({ screen }, action) => ({
  screen: screenReducer(screen, action)
});
