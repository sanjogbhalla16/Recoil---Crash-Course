import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AsyncApp from "./async-data-queries/Async-App.jsx";
import AtomFamilyApp from "./atomFamily/Atom-Family-App.jsx";
import SelectorFamilyApp from "./SelectorFamily/selectorFamily.jsx";

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

createRoot(document.getElementById("atomFamily-root")).render(
  <StrictMode>
    <AtomFamilyApp />
  </StrictMode>
);

createRoot(document.getElementById("selectorFamily-root")).render(
  <StrictMode>
    <SelectorFamilyApp />
  </StrictMode>
);
