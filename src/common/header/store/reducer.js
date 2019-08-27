const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === 'handle_input_focus') {
    return { 
      focused: true
    }
  }
  if (action.type === 'handle_input_blur') {
    return {
      focused: false
    }
  }
  return state;
}