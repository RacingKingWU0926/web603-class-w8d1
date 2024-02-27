import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Count from "./App";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Count />
  </Provider>,
  rootElement // This is where you specify the mounting point
);
