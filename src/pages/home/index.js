import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';

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
        { this.props.scrollDisplay ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null }
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScroll)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScroll)
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }
}

const mapState = (state) => ({
  scrollDisplay: state.getIn(['home', 'scrollDisplay'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScroll() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home);