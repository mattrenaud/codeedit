import React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';

import { createStore } from 'redux'
import rtedit from './reducers'

import './index.css';

import App from './App';

import Firebase from './Firebase';

const store = createStore(rtedit)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

new Firebase(store)



