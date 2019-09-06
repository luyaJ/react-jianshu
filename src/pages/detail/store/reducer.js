import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

// 使用fromJS 把state变成不可以修改的值
const defaultState = fromJS({
  
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default: 
      return state;
  }
}