import viewsReducer from "./views";
import menuReducer from "./menu";
import matchReducer from "./match";
import postReducer from "./post";

export default ({ views, menu, match, post }, action) => ({
  views: viewsReducer(views, action),
  menu: menuReducer(menu, action),
  match: matchReducer(match, action),
  post: postReducer(post, action)
});
