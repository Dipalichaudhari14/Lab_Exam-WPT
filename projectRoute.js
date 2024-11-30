import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowDelivery from "./components/ShowDelivery";
import AddDelivery from "./components/AddDelivery";
import App from "./components/App";

const projectRoute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "showdelivery",
        element: <ShowDelivery />,
      },
      {
        path: "adddelivery",
        element: <AddDelivery />,
      },
    ],
  },
]);

export default projectRoute;
