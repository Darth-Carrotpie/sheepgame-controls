import viewsReducer from './views';
import menuReducer from './menu';
import matchReducer from './match';
import postReducer from './post';
import globalReducer from './global';

export default ({ views, menu, match, post, global }, action) => ({
  views: viewsReducer(views, action),
  menu: menuReducer(menu, action),
  match: matchReducer(match, action),
  post: postReducer(post, action),
  global: globalReducer(global, action),
});
