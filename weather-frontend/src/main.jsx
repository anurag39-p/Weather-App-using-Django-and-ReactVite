import React from "react";
import ReactDOM from "react-dom/client"; // Updated ReactDOM for React 18
import App from "./App"; // This will now correctly import the default export
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // React 18 style
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
