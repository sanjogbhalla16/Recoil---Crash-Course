import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AsyncApp from "./async-data-queries/Async-App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(document.getElementById("async-root")).render(
  <StrictMode>
    <AsyncApp />
  </StrictMode>
);
