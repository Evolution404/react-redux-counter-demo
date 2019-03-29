import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import counterApp from './reducers/index'
import App from './App';

let store = createStore(counterApp)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'));
