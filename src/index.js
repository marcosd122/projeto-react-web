import ReactDOM from "react-dom";
import React from "react";
import { MyRoute } from "./routes/Routes";
import "./index.css";

ReactDOM.render(

  <React.StrictMode>
    <MyRoute />,
  </React.StrictMode>,

  document.querySelector("#root")
);
