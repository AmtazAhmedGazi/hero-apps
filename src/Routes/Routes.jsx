import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetails from "../pages/AppDetails/AppDetails";
import SearchNotFound from "../pages/SearchNotFound/SearchNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/appsData.json");
          const data = await res.json();
          return data;
        },
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        loader: async () => {
          const res = await fetch("/appsData.json");
          const data = await res.json();
          return data;
        },
        Component: Apps,
      },
      {
        loader: async () => {
          const res = await fetch("/appsData.json");
          const data = await res.json();
          return data;
        },
        path: "/installation",
        Component: Installation,
      },
      {
        loader: async () => {
          const res = await fetch("/appsData.json");
          const data = await res.json();
          return data;
        },
        path: "/appDetails/:id",
        Component: AppDetails,
        errorElement: <SearchNotFound></SearchNotFound>,
      },
    ],
  },
]);
