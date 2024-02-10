import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Products from "./Pages/Products";
import Browse from "./Pages/Browse";
import Detail from "./Pages/Detail";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/detail/:id",
          element: <Detail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
