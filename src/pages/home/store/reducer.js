// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

// 使用fromJS 把state变成不可以修改的值
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/3301720/daa79a77-5321-4149-add8-656c1326bc01.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
  }, {
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/3301720/daa79a77-5321-4149-add8-656c1326bc01.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
  }],
  articleList: [{
    id: 1,
    title: '社会',
    desc: '01 在这个刚刚过去的周末，台风“利奇马”牢牢占据了C位。 8月10号，利奇马在浙江温岭登陆之后，造成了严重的灾害。 水漫城区，大批受灾群众转移，造成',
    imgUrl: '//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }, {
    id: 1,
    title: '随笔',
    desc: '娱乐圈最不缺热闹。 最近有一对夫妻，就又让大家操心了一回。 朱丹&周一围夫妇。 争议源于一视频片段。 最近新上线观察类网综《做家务的男人》，朱',
    imgUrl: '//upload.jianshu.io/collections/images/1767718/crop1557956823393.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64/format/webp'
  }]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    
    default: 
      return state;
  }
}