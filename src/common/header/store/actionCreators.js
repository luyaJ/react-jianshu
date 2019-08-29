import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
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