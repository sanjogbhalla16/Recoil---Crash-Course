import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Prop from "./Prop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(document.getElementById("prop-drilling")!).render(
  <StrictMode>
    <Prop />
  </StrictMode>
);
