import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import Header from './common/header/index'
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        </Provider>
    );
  }
}

export default App;
