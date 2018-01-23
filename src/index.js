import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';

import { createStore } from 'redux'
import reducers from './reducers'

import './index.css';

import App from './App';

import Firebase from './Firebase';

const store = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

new Firebase(store)



