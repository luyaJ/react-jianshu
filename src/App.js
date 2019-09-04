import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './style.js';
import Header from './common/header/index';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/detail" component={Detail}></Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
