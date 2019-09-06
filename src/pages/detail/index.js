import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Title, Content } from './style';
import * as actionCreators from './store/actionCreators';

class Home extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(Home);