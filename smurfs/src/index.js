import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import { smurfReducer } from './reducers';
import App from "./App";

// create store & pass in reducer

const store = createStore(smurfReducer, applyMiddleware(thunk));
console.log(store.getState);



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));
