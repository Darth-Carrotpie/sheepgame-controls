import screenReducer from './screen';
import menuReducer from './menu';

export default ({ screen, menu }, action) => ({
  screen: screenReducer(screen, action),
  menu: menuReducer(menu, action)
});
