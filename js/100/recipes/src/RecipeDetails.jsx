import { useState, useEffect } from 'react'
import List from './List';
import { useParams } from 'react-router-dom';

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      setRecipe();
      setError();
      setLoading(true);
      try {
        const response = await fetch(`/${id}.json`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const recipe = await response.json();
        setRecipe(recipe);
      } catch (e) {
        console.error(e);
        setError(e);
      }
      setLoading(false);
    })();
  }, [id]);

  const [pictureShowing, setPictureShowing] = useState(true);

  const toggleShowPicture = () => {
    setPictureShowing(!pictureShowing);
  };

  const { name, ingredients, directions, picture } = recipe || {};

  return (
    <>
      {loading && <h2>loading...</h2>}
      {error && <h2>error - {/*error.message*/} failed to load recipe {id}</h2>}
      {recipe && <>
        <h2>{name}</h2>
        <button onClick={toggleShowPicture}>{pictureShowing ? 'hide' : 'show'}</button>
        <br />
        {pictureShowing
          ? <img src={picture} style={{ width: '200px' }} />
          : null}
        <List name="ingredients" items={ingredients} />
        <List name="directions" items={directions} />
      </>}
    </>
  );
}
