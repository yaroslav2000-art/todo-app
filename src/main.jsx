import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FarAwayApp from "./FarAwayApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FarAwayApp />
  </StrictMode>,
);
