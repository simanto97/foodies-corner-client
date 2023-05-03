import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import RecipeCardLayout from "../Layouts/RecipeCardLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Recipes from "../Pages/Recipes/Recipes/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/recipes",
    element: <RecipeCardLayout></RecipeCardLayout>,
    children: [
      {
        path: ":id",
        element: <Recipes></Recipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
export default router;
