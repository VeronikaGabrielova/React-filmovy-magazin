import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/movies",
        element: <Movies />,
        children: [
          {
            path: "/movies/:id",
            element: <Movie />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
