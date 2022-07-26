import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import reducer, { countReducer, loginReducer } from './redux/reducer';
import {combineReducers, createStore} from "redux"
import { Provider } from 'react-redux';
const rootReducers = combineReducers({
  count: countReducer,
  logged: loginReducer
})
// const myStore = createStore(reducer);
const myStore = createStore(rootReducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <App/>
  </Provider>
    
);

// If you want to start measuring performance in your app, pass a function

