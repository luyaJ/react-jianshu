const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
}

export default (state = defaultState,  action) => {
  if (action.type === 'handle_input_focus') {
    const newState = JSON.parse(JSON.stringify(state)); // 深拷贝state
    newState.focused = action.focused;
    return newState;
  }
  if (action.type === 'handle_input_blur') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = action.focused;
    return newState;
  }
  if (action.type === 'handle_mouse_enter') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.mouseIn = action.mouseIn;
    return newState;
  }
  if (action.type === 'handle_mouse_leave') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.mouseIn = action.mouseIn;
    return newState;
  }
  if (action.type === 'get_data') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    newState.totalPage = action.totalPage;
    return newState;
  }
  if (action.type === 'handle_change_page') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.page = action.page;
    return newState;
  }
  return state;
}