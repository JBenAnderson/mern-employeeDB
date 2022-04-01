import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// include BrowserRouter to keep UI in sync with URL to only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page and a must for responsive apps
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
