import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

// 使用fromJS 把state变成不可以修改的值
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList:[],
  articlePage: 1,
  scrollDisplay: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANEG_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      })
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('scrollDisplay', action.show)
    default: 
      return state;
  }
}