import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { featureReducer as reducer } from "./reducers/featureReducer";

import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

// set up store and provider

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
