import { combineReducers } from 'redux-immutable';  // 这样state就是immutable类型
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
  header: headerReducer
});

export default reducer;