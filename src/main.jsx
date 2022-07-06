import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { ProductProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>
);
