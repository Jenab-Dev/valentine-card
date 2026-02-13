import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./input.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter basename="/valentine-card">
            <App />
        </HashRouter>
    </React.StrictMode>,
);
