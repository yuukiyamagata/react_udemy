import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>
  , document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
