import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/raleway";
import App from "./App";
import { LoginProvider } from "./contexts/LoginContext";
import { BrowserRouter } from "react-router-dom";

console.log(BrowserRouter);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);

