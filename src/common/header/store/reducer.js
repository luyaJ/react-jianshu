import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
});

// 纯函数：给定固定的输入就有固定的输出，无副作用
export default (state = defaultState, action) => {
  if(action.type === constants.SEARCH_FOCUS) {
    // immutable对象的set方法 会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focused', true);
  }
  if(action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if(action.type === constants.CHANGE_LIST) {
    return state.set('list', action.data);
  }
  return state;
}