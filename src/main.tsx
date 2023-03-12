import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PrimeReact from "primereact/api";

PrimeReact.appendTo = "self";
PrimeReact.ripple = true;

//theme
import "primereact/resources/themes/mdc-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

//primeflex
import "primeflex/primeflex.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
