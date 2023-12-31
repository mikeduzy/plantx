import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";

import Home from "./components/pages/Home";
import Insertpage from "./components/pages/Insertpage";
import Createnewplant from "./components/pages/Createnewplant";
import Market from "./components/pages/Market";
const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
      {/* <Nav /> */}
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/market",
        Component: Market,
      },
      {
        path: "/listyourplant",

        Component: Insertpage,
      },
      {
        path: "/createnewplant",

        Component: Createnewplant,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
