import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const handleInputFocusAction = () => ({
  type: actionTypes.HANDLE_INPUT_FOCUS
})

export const handleInputBlurAction = () => ({
  type: actionTypes.HANDLE_INPUT_BLUR
})

export const getListAction = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data;
        // action => store => reducer
        dispatch(changeList(data.data));
      })
      .catch((err) => console.log(err))
  }
}

export const handleMouseEnterAction = () => ({
  type: actionTypes.HANDLE_MOUSE_ENTER
})

export const handleMouseLeaveAction = () => ({
  type: actionTypes.HANDLE_MOUSE_LEAVE
})

export const changePageAction = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})