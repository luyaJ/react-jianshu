import * as actionTypes from './actionTypes';

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

export const handleChangePage = (page) => ({
  type: actionTypes.HANDLE_CHANGE_PAGE,
  page
})

export const getDataAction = (list, totalPage) => ({
  type: actionTypes.GET_DATA,
  list,
  totalPage
})