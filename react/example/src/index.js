import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import 'isomorphic-fetch';

import form from "./reducers/form"

const reducers = combineReducers({
  form: form
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
