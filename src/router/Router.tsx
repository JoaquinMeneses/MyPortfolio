import React from "react";
import App from "../App";
import NotFoundPage from "../../public/NotFoundPage";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
]);

export default Router;
