import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import projectRoute from "./projectRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={projectRoute} />);
