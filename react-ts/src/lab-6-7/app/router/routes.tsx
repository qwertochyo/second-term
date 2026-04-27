import { createBrowserRouter } from "react-router-dom";
import { ListPage } from "../../pages/list/ListPage";
import { HomePage } from "../../pages/home/HomePage";
import { AppLayout } from "../layout/AppLayout";
import { Building } from "../../pages/building/BuildingPage";
import { ChartPage } from "../../pages/chart/ChartPage";
import { QuizPage } from "../../pages/quiz/QuizPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { 
        path: "/",
        element: <HomePage />
      },
      { 
        path: "/list",
        element: <ListPage />
      },
      {
        path: "/building/:id",
        element: <Building />
      }, 
      {
        path: "/diagrams",
        element: <ChartPage />
      },
      {
        path: "/quiz",
        element: <QuizPage />
      }
    ]
  }
]);