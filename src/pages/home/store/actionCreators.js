import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = (result) => ({
  type: actionTypes.CHANEG_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json")
      .then((res) => {
        const result = res.data.data;
        dispatch(changeHomeData(result));
      })
      .catch((err) => console.log(err))
  }
}