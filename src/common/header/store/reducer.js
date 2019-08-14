const defaultState = {
  focused: false
};

// 纯函数：给定固定的输入就有固定的输出，无副作用
export default (state=defaultState, action) => {
  if(action.type === 'search_focus') {
    return {
      focused: true
    }
  }
  if(action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state;
}