import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators'
import axios from 'axios';

// 使用redux-thunk的好处：可以把请求放在actionCreators.js中，以前action是对象，现在是函数
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
    .then((res) => {
      if (res.data.success) {
        const totalPage = Math.ceil(res.data.data.length / 10) - 1;
        const action = actionCreators.getDataAction(res.data.data, totalPage);
        dispatch(action);
      }
    })
    .catch((err) => console.log(err));
  }
}

export const handleInputFocusAction = (value) => ({
  type: actionTypes.HANDLE_INPUT_FOCUS,
  focused: value
})

export const handleInputBlurAction = (value) => ({
  type: actionTypes.HANDLE_INPUT_BLUR,
  focused: value
})

export const handleMouseEnterAction = (value) => ({
  type: actionTypes.HANDLE_MOUSE_ENTER,
  mouseIn: value
})

export const handleMouseLeaveAction = (value) => ({
  type: actionTypes.HANDLE_MOUSE_LEAVE,
  mouseIn: value
})

export const handleChangePageAction = (page) => ({
  type: actionTypes.HANDLE_CHANGE_PAGE,
  page
})

export const getDataAction = (list, totalPage) => ({
  type: actionTypes.GET_DATA,
  list,
  totalPage
})