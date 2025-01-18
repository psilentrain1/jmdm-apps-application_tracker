import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App.tsx";
import { Dashboard } from "./views/Dashboard.tsx";
import { Applications } from "./views/Applications.tsx";
import { Edit } from "./views/Edit.tsx";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/edit/:appid",
        element: <Edit />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
