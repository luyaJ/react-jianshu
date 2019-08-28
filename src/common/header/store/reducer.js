import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

// 使用fromJS 把state变成不可以修改的值
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.HANDLE_INPUT_FOCUS) {
    // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
    // 并不会改掉原始state的数据
    return state.set('focused', true);
  }
  if (action.type === actionTypes.HANDLE_INPUT_BLUR) {
    return state.set('focused', false);
  }
  return state;
}