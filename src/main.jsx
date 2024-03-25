import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer";
import "./index.css"; // Import Tailwind CSS
import About from "./About";
import Error from "./Error";
import {
  BrowserRouter,
  RouterProvider,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.querySelector("#root"));
const App = () => {
  return (
    <div className="">
      <Head />
      <Outlet />
    </div>
  );
};
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/main",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      }
    ],
  },
]);
root.render(<RouterProvider router={Router} />);
