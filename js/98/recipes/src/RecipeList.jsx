import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipeList(props) {
  const recipeJsx = props.recipes?.length
    ? props.recipes.map((r, index) => <li key={r.id} onClick={() => props.selectRecipe(index)}><Link to="/recipe/foo">{r.theName}</Link></li>)
    : <h2>loading...</h2>;

  return (
    <ul className="bulletless">
      {recipeJsx}
    </ul>
  )
}

RecipeList.propTypes = {
  //recipes: PropTypes.array.isRequired
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      theName: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  selectRecipe: PropTypes.func.isRequired
}
