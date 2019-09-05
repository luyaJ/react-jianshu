import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import * as actionCreators from '../store/actionCreators';

class List extends Component {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;

    return (
      <div>
        {
          articleList.map((item, index) => {
            return (
              <ListItem key={index+item.get('id')}>
                <img className="list-pic" src={item.get('imgUrl')} alt=""></img>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(articlePage)}>阅读更多</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(articlePage) {
    dispatch(actionCreators.getMoreList(articlePage))
  }
})

export default connect(mapStateToProps, mapDispatch)(List);