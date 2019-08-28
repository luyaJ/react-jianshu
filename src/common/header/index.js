import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, 
  NavSearch, Addition, Button, SearchInfo, SearchTitle, 
  SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

class Header extends Component {
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
            <CSSTransition in={this.props.focused} classNames='slide' timeout={200}>
              <NavSearch className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe651;</i>
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
    )
  }
}

// 把store中的state映射到props里面去了
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.handleInputFocusAction());
    },
    handleInputBlur() {
      dispatch(actionCreators.handleInputBlurAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);