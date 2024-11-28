import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Admin from "./pages/admin/index.tsx";
import Login from "./pages/login/index.tsx";
import setting from "./setting.json";

let router = {};

if (setting.mode === 'online') {
  router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/reader",
      element: (
        <App/>
      ),
      errorElement: <App />
    },
    {
      path: "admin/",
      element: <Admin />
    }
  ]);
}

if (setting.mode === 'offline') {
  router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App/>
      ),
      errorElement: <App />
    }
  ]);
}

const Router = <RouterProvider router={router} />;

export default Router;
