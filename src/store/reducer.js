import { combineReducers } from 'redux-immutable';  // 这样state就是immutable类型
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
 
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
});

export default reducer;