import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/error/ErrorComponent";
import NotFound from "./components/error/NotFound";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <LandingPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "login",
        element: <LoginPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "register",
        element: <RegisterPage />,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
