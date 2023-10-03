import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import About from "../pages/About";
import Layout from "../layout/Layout";
import En from "../pages/En";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/en",
        element: <En />,
      },
    ],
  },
]);
