import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

// 使用fromJS 把state变成不可以修改的值
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.HANDLE_INPUT_FOCUS:
      // immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
      // 并不会改掉原始state的数据
      return state.set('focused', true);
    case actionTypes.HANDLE_INPUT_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      // 两种方式都可以
      // return state.set('list', action.data).set('totalPage', action.totalPage);
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.HANDLE_MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.HANDLE_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default: 
      return state;
  }
}