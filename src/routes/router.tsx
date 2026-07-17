import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Home from "../pages/home";
import ProjectPage from "../pages/project-page";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <ProjectPage />,
      },
    ],
  },
];

export const Elements = createBrowserRouter(routes);
