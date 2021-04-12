import viewsReducer from './views';
import menuReducer from './menu';
import matchReducer from './match';
import postReducer from './post';
import translationsReducer from './translations';
import globalReducer from './global';

export default (
  { views, menu, match, post, translations, global },
  action
) => ({
  views: viewsReducer(views, action),
  menu: menuReducer(menu, action),
  match: matchReducer(match, action),
  post: postReducer(post, action),
  translations: translationsReducer(translations, action),
  global: globalReducer(global, action),
});
