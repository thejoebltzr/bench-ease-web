import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Skills from "../pages/Skills/Skills";
import Settings from "../pages/Settings/Settings";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/skills", element: <Skills /> },
  { path: "/settings", element: <Settings /> },
]);

export default router;
