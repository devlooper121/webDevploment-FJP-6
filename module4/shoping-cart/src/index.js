import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { reducer } from './redux/reducer';

import {createStore} from "redux"
import {Provider} from "react-redux"

let myStore = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {myStore} >
      <App/>
    </Provider>
 
);

