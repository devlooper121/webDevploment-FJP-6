import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import reducer from './redux/reducer';
import {createStore} from "redux"
import { Provider } from 'react-redux';

const myStore = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <App/>
  </Provider>
    
);

// If you want to start measuring performance in your app, pass a function

