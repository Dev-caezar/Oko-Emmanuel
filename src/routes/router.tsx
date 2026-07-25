import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Home from "../pages/home";
import ProjectPage from "../pages/project-page";
import ServicePage from "../pages/service-page";
import ProjectDetailsPage from "../pages/project-details";
import ContactPage from "../pages/contact-page";

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
      {
        path: "/project/:title",
        element: <ProjectDetailsPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
];

export const Elements = createBrowserRouter(routes);
