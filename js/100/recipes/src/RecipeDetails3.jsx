import { useState } from 'react'
import List from './List';
import { useLoaderData } from 'react-router-dom';

export default function RecipeDetails3() {
  const recipe = useLoaderData();

  const [pictureShowing, setPictureShowing] = useState(true);

  const toggleShowPicture = () => {
    setPictureShowing(!pictureShowing);
  };

  const { name, ingredients, directions, picture } = recipe || {};

  return (
    <>
      <h2>{name}</h2>
      <button onClick={toggleShowPicture}>{pictureShowing ? 'hide' : 'show'}</button>
      <br />
      {pictureShowing
        ? <img src={picture} style={{ width: '200px' }} />
        : null}
      <List name="ingredients" items={ingredients} />
      <List name="directions" items={directions} />
    </>
  );
}

export async function loader(routeStuff) {
  const { id } = routeStuff.params;

  try {
    const response = await fetch(`/${id}.json`);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const recipe = await response.json();
    return recipe;
  } catch (e) {
    console.error(e);
    throw new Error(`Unable to load recipe ${id}`)
  }
}
