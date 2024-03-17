import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import "./index.css"; // Import Tailwind CSS
import About from "./About";
import Error from "./Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
const root = ReactDOM.createRoot(document.querySelector("#root"));

const App = () => {
  return (
    <div className="font-bold font-Roboto">
      <Head />
      <Outlet />
    </div>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
root.render(<RouterProvider router={approuter} />);
