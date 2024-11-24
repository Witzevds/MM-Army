import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./Pages.jsx";
import Header from "../components/Header/Header.jsx";
import "../assets/css-variables/Variables.css";
import "../assets/css-variables/reset.css";
import Hero from "../components/Hero/Hero.jsx";
import Services from "../components/Services/Services.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />

    <Services />
  </StrictMode>
);
