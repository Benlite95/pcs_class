import App from './App';
import RecipeDetails3, { loader as recipeLoader } from './RecipeDetails3';
import RecipeList2/*, { loader as recipesLoader }*/ from './RecipeList2';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RecipeList2 />,
        loader: () => fetch('/recipes.json')
        //loader: recipesLoader,
        //errorElement: <ErrorPage />
      },
      {
        path: 'recipe/:id',
        element: <RecipeDetails3 />,
        loader: recipeLoader,
        //errorElement: <ErrorPage />
      },
      {
        path: '*',
        element: <Navigate to="/" replace={true} />
      }
    ]
  }
]);

export default router;
