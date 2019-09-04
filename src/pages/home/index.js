import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="binner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4707/589f8bc74616a27b1b3ffaa282210bed81324261.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;