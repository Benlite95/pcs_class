import { Link, useLoaderData } from 'react-router-dom';

export default function RecipeList2() {
  const recipes = useLoaderData();
  return (
    <>
      <ul className="bulletless">
        {recipes.map(r => <li key={r.id}><Link to={`/recipe/${r.id}`}>{r.name}</Link></li>)}
      </ul>
    </>
  )
}

/*export function loader() {
  return fetch('/recipes.json');
}*/
