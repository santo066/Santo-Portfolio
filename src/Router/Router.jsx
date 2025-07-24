import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);