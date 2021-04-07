import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initialState, reducer} from './store/reducer';

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logger)
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
