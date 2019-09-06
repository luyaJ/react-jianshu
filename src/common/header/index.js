import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, 
  NavSearch, Addition, Button, SearchInfo, SearchTitle, 
  SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';

class Header extends Component {

  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, changePage } = this.props;
    const newList = list.toJS();  // 把immutable数据转换成普通的数据
    let pageList = [];

    if (newList.length) {
      for (let i = page*10; i < (page + 1)*10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => changePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe857;</i>换一批
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
        <Link to="/">
          <Logo></Logo>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={focused} classNames='slide' timeout={200}>
                <NavSearch className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus(list)}
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
        </Link>
      </HeaderWrapper>
    )
  }
}

// 把store中的state映射到props里面去了
const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused
    // 因为使用了immutable，那么不可以直接用点号来取得focused的值，需要用get()方法
    // focused: state.get('header').get('focused') 和下面的一样
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      console.log(list)
      if (list.size === 0) {
        dispatch(actionCreators.getListAction());
      }
      dispatch(actionCreators.handleInputFocusAction());
    },
    handleInputBlur() {
      dispatch(actionCreators.handleInputBlurAction());
    },
    handleMouseEnter() {
      dispatch(actionCreators.handleMouseEnterAction())
    },
    handleMouseLeave() {
      dispatch(actionCreators.handleMouseLeaveAction())
    },
    changePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage - 1) {
        dispatch(actionCreators.changePageAction(page+1))
      } else {
        dispatch(actionCreators.changePageAction(0))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);