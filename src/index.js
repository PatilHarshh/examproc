import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import 'bootstrap/dist/css/bootstrap.min.css';

// Find the root element in your HTML
const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render your app using the root
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
