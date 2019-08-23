import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import Header from './common/header/index'
// import store from './store/index';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
      </div>
      // <Provider store={store}>
        
      // </Provider>
    );
  }
}

export default App;
