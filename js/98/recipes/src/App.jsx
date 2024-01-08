import { useState, useEffect } from 'react'
import './App.css'
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

export default function App(props) {
  const [state, setState] = useState({
    recipes: [],
    selectedRecipeIndex: 1
  })

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('./recipes.json');
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const recipes = await response.json();
        console.log(recipes);
        setState({
          ...state,
          recipes
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const selectedRecipe = state.recipes[state.selectedRecipeIndex];

  const recipeDetailJsx = selectedRecipe ? <RecipeDetails recipe={selectedRecipe} /> : <h2>loading...</h2>;


  const router = createBrowserRouter([
    {
      path: '/',
      element: <div className="container text-center">
                  <h1>PCS Recipes</h1>
                  <Outlet />
               </div>,
      children: [
        {
          index: true,
          element: <RecipeList recipes={state.recipes} selectRecipe={i => setState({
            ...state,
            selectedRecipeIndex: i
          })} />
        },
        {
          path: 'recipe/:id',
          element: recipeDetailJsx
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}
