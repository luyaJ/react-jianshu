import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

// 纯函数：给定固定的输入就有固定的输出，无副作用
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS: 
     // immutable对象的set方法 会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage);
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    default:
      return state;
  }
}