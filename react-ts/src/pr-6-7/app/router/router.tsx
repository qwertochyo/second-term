import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { HomePage } from "../../pages/home/HomePage";
import { RecipesPage } from "../../pages/recipes/RecipesPage";
import { DiagramPage } from "../../pages/diagram/DiagramPage";
import { RecipePage } from "../../pages/recipe/RecipePage";
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
        path: "/recipes",
        element: <RecipesPage />
      },
      {
        path: "/diagram",
        element: <DiagramPage />
      },
      {
        path: "/recipe/:id",
        element: <RecipePage />
      },
      {
        path: "/quiz",
        element: <QuizPage />
      }
    ]
  }
]);