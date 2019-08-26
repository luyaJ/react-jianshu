import * as actionTypes from './actionTypes';

const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state)); // 深拷贝state
  switch (action.type) {
    case actionTypes.HANDLE_INPUT_FOCUS:
      newState.focused = action.focused;
      return newState;
    case actionTypes.HANDLE_INPUT_BLUR:
      newState.focused = action.focused;
      return newState;
    case actionTypes.HANDLE_MOUSE_ENTER:
      newState.mouseIn = action.mouseIn;
      return newState;
    case actionTypes.HANDLE_MOUSE_LEAVE:
      newState.mouseIn = action.mouseIn;
      return newState;
    case actionTypes.GET_DATA:
      newState.list = action.list;
      newState.totalPage = action.totalPage;
      return newState;
    case actionTypes.HANDLE_CHANGE_PAGE:
      newState.page = action.page;
      return newState;
    default:
      return state;
  }
}