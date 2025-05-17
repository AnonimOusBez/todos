import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import App2 from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/btn" element={<App2 />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
