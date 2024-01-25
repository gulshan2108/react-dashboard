import React from "react";
const Dashboard = React.lazy(() => import("../Pages/Dashboard/Dashboard"));

const PublicRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
];
export default PublicRoutes;
