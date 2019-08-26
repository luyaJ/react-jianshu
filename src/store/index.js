import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 为了让thunk和redux dev tools可以同时使用，我们使用增强函数，所以在第一行引入了 compose
// 利用 compose 创建一个增强函数，就相当于建立了一个链式函数
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;