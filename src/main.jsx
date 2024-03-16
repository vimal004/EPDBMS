import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import "./index.css"; // Import Tailwind CSS
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.querySelector("#root"));

const App = () => {
  return (
    <div className="font-bold font-Roboto">
      <Head />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<App />);
