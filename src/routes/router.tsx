import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Home from "../pages/home";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export const Elements = createBrowserRouter(routes);
