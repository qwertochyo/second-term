import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";

export const AppProvider = () => {
  return (
    <RouterProvider router={router}/>
  );
}