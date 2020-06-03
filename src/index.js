import React from "react";
import ReactDOM from "react-dom";
import Routing from "./router/Routing";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routing />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
