import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch,
  Addition, Button, SearchInfo, SearchTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      list: [],
      page: 0
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  getListArea() {
    const pageList = [];

    for (let i = this.state.page * 10; i < (this.state.page+1)*10; i++) {
      pageList.push(this.state.list[i])
    }

    if (this.state.focused) {
      return (
        <SearchInfo>
          <SearchTitle>热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchTitle>
          <SearchInfoList> 
              {
                pageList.map((item) => {
                  return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                })
              }
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
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}>
              </NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe651;</i>
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

  handleInputFocus() {
    this.setState({
      focused: true
    })
    axios.get('/api/headerList.json')
      .then((res) => {
        if (res.data.success) {
          this.setState({
            list: res.data.data
          })
        }
      })
      .catch((err) => console.log(err));
  }

  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default header;