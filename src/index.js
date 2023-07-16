import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/raleway";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoginProvider>
      <App />
    </LoginProvider>
  </BrowserRouter>
);
