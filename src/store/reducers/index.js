import viewsReducer from './views';
import menuReducer from './menu';
import matchReducer from './match';

export default ({ views, menu, match }, action) => ({
  views: viewsReducer(views, action),
  menu: menuReducer(menu, action),
  match: matchReducer(match, action)
});
