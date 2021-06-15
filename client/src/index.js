import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import{ applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/ConfigStore';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

ReactDOM.render(
  // 크롬 확장프로그램인 redux dev tool을 이용하기 위해 설정함 & redux store 기본설정 (Blockmonkey)
  <Provider
    store = {createStoreWithMiddleware(rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__&&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
