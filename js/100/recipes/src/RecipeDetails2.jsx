import { useState, useEffect } from 'react'
import List from './List';
import { useParams } from 'react-router-dom';

export default function RecipeDetails2(props) {
  const { id } = props;
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    if (!id) {
      return;
    }

    //let active = true;
    const abortController = new AbortController();

    (() => {
      setTimeout(async () => {
        try {
          //console.log(`fetching ${id} active = ${active}`);
          const response = await fetch(`/${id}.json`, { signal: abortController.signal });
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          const recipe = await response.json();
          //if (active) {
          setRecipe(recipe);
          /*} else {
            console.log(`not setting recipe ${id}`);
          }*/
        } catch (e) {
          //if(e.name === 'AbortError') {
          if(e === 'user aborted') {
            console.log(`${id} was aborted`);
          } else {
            console.error('OOPS', e);
          }
        }
      }, Math.random() * 10000);
    })();

    return () => {
      console.log(`active false for ${id}`);
      //active = false;
      abortController.abort('user aborted');
    }
  }, [id]);

  const [pictureShowing, setPictureShowing] = useState(true);

  const toggleShowPicture = () => {
    setPictureShowing(!pictureShowing);
  };

  const { name, ingredients, directions, picture } = recipe || {};

  return (
    <>
      {recipe ? <>
        <h2>{name}</h2>
        <button onClick={toggleShowPicture}>{pictureShowing ? 'hide' : 'show'}</button>
        <br />
        {pictureShowing
          ? <img src={picture} style={{ width: '200px' }} />
          : null}
        <List name="ingredients" items={ingredients} />
        <List name="directions" items={directions} />
      </> : <h2>loading...</h2>
      }
    </>
  );
}
