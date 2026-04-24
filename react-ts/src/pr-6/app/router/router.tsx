import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { HomePage } from "../../pages/home/HomePage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { 
        path: "/",
        element: <HomePage />
      }
    ]
  }
]);