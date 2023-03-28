import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import { HeaderComponent } from "./components/HeaderComponent";
import { Footer } from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
