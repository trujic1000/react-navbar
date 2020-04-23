import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeStateProvider } from "./state";

ReactDOM.render(
  <React.StrictMode>
    <ThemeStateProvider>
      <App />
    </ThemeStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
