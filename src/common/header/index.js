import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch,
  Addition, Button, SearchInfo, SearchTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import store from '../../store/index';
import * as actionCreators from '../../store/actionCreators';
import { connect } from 'react-redux';

class header extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const pageList = [];

    if (list.length) {
      for (let i = page*10; i < (page+1)*10; i++) {
        pageList.push(
          <SearchInfoItem key={list[i]}>{list[i]}</SearchInfoItem>
        )
      }
    }
    
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchTitle>热门搜索
            <SearchInfoSwitch onClick={handleChangePage(page, totalPage, this.spinIcon)}>
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
    const { focused, list, handleInputFocus, handleInputBlur } = this.props;
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
            <CSSTransition classNames="slide" in={focused} timeout={200}>
              <NavSearch className={focused ? 'focused' : ''}
                onFocus={handleInputFocus(list)}
                onBlur={handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe651;</i>
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
}

// 映射
const mapStateToProps = (state) => ({
  focused: state.focused,
  mouseIn: state.mouseIn,
  list: state.list,
  page: state.page,
  totalPage: state.totalPage
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    const action = actionCreators.handleInputFocusAction(true);
    store.dispatch(action);

    // 函数传参 避免无意义的请求发送，提升性能
    if (list.length === 0) {
      const action = actionCreators.getList();
      store.dispatch(action);
    }
  },
  handleInputBlur() {
    const action = actionCreators.handleInputBlurAction(false)
    store.dispatch(action);
  },
  handleMouseEnter() {
    const action = actionCreators.handleMouseEnterAction(true);
    store.dispatch(action);
  },
  handleMouseLeave() {
    const action = actionCreators.handleMouseLeaveAction(false);
    store.dispatch(action);
  },
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
})

export default connect(mapStateToProps, mapDispatchToProps)(header);