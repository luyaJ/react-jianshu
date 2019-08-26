import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch,
  Addition, Button, SearchInfo, SearchTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import store from '../../store/index';
import * as actionCreators from '../../store/actionCreators';

class header extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);  //订阅redux状态
  }

  getListArea() {
    const pageList = [];

    if (this.state.list.length) {
      for (let i = this.state.page*10; i < (this.state.page+1)*10; i++) {
        pageList.push(
          <SearchInfoItem key={this.state.list[i]}>{this.state.list[i]}</SearchInfoItem>
        )
      }
    }
    
    if (this.state.focused || this.state.mouseIn) {
      return (
        <SearchInfo onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <SearchTitle>热门搜索
            <SearchInfoSwitch onClick={this.handleChangePage.bind(this, this.state.page, this.state.totalPage, this.spinIcon)}>
              <i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe857;</i>
              换一批
            </SearchInfoSwitch>
          </SearchTitle>
          <SearchInfoList> 
              { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition classNames="slide" in={this.state.focused} timeout={200}>
              <NavSearch className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus.bind(this, this.state.list)}
                onBlur={this.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe651;</i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe62a;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  handleInputFocus(list) {
    const action = actionCreators.handleInputFocusAction(true);
    store.dispatch(action);

    // 函数传参 避免无意义的请求发送，提升性能
    if (list.length === 0) {
      const action = actionCreators.getList();
      store.dispatch(action);
    }
  }

  handleInputBlur() {
    const action = actionCreators.handleInputBlurAction(false)
    store.dispatch(action);
  }

  handleMouseEnter() {
    const action = actionCreators.handleMouseEnterAction(true);
    store.dispatch(action);
  }

  handleMouseLeave() {
    const action = actionCreators.handleMouseLeaveAction(false);
    store.dispatch(action);
  }

  handleChangePage(page, totalPage, spin) {
    // 换一换的旋转功能
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
 
    // 换页功能
    if (page < totalPage) {
      const action = actionCreators.handleChangePage(page + 1);
      store.dispatch(action);
    } else {
      const action = actionCreators.handleChangePage(0);
      store.dispatch(action);
    }
  }

  storeChange() {
    this.setState(store.getState());
  }
}

export default header;