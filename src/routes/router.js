import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { Home,AboutUs } from "../pages";

export const Router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/AboutUs',element:<AboutUs/>}
])
