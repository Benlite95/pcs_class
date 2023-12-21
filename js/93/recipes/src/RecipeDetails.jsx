import React from 'react'
import List from './List';

export default function RecipeDetails(props) {
  const { name, ingredients, directions } = props.recipe;
  // const ingredientsJsx = ingredients.map(i => <li>{i}</li>);
  // const directionsJsx = directions.map(i => <li>{i}</li>);

  return (
    <>
      <h2>{name}</h2>
      {/* <h4>ingredients</h4>
      <ul className="bulletless">
        {ingredientsJsx}
      </ul>
      <h4>directions</h4>
      <ul className="bulletless">
        {directionsJsx}
      </ul> */}
      <List name="ingredients" items={ingredients}/>
      <List name="directions" items={directions} />
    </>
  )
}
