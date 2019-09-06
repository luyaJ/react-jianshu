import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import * as actionCreators from '../store/actionCreators';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;

    return (
      <div>
        {
          articleList.map((item, index) => {
            return (
              <Link key={index+item.get('id')} to='/detail'>
                <ListItem>
                  <img className="list-pic" src={item.get('imgUrl')} alt=""></img>
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
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