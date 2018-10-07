import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './components/app';
import reducers from './reducers/index';

const store = createStore(reducers, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
