import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setRecipes();
      setError();
      setLoading(true);
      try {
        const response = await fetch('/recipes.json');
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const recipes = await response.json();
        setRecipes(recipes);
      } catch (e) {
        console.error(e);
        setError(e);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading && <h2>loading...</h2>}
      {error && <h2>error - failed to load recipes</h2>}
      {recipes && <ul className="bulletless">
          {recipes.map(r => <li key={r.id}><Link to={`/recipe/${r.id}`}>{r.name}</Link></li>)}
      </ul>}
    </>
  )
}
