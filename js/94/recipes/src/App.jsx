import { Component } from 'react'
import './App.css'
import RecipeDetails from './RecipeDetails';

class App extends Component {
  /*state = {
    recipes: [],
    selectedRecipeIndex: 1
  };*/

  constructor(props) {
    super(props);

    //this.selectRecipe = this.selectRecipe.bind(this);
    this.state = {
      recipes: [],
      selectedRecipeIndex: 1
    };
  }

  //selectRecipe = e => {
  selectRecipe(index) {
    console.log(index);

    this.setState({
      selectedRecipeIndex: index
    });
  }

  render() {
    const { recipes, selectedRecipeIndex } = this.state;
    const selectedRecipe = recipes[selectedRecipeIndex];
    const recipeJsx = recipes.length
      ? recipes.map((r, index) => <li key={r.id} onClick={/*this.selectRecipe.bind(this, index)*/ () => this.selectRecipe(index)}>{r.name}</li>)
      : <h2>loading...</h2>;
    const recipeDetailJsx = selectedRecipe ? <RecipeDetails recipe={selectedRecipe} /> : <h2>loading...</h2>;

    return (
      <div className="container text-center">
        <h1>PCS Recipes</h1>
        {/*JSON.stringify(this.state?.recipes)*/}

        <ul className="bulletless">
          {recipeJsx}
        </ul>

        <hr />

        {recipeDetailJsx}

      </div>
    )
  }

  async componentDidMount() {
    try {
      const response = await fetch('./recipes.json');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const recipes = await response.json();
      console.log(recipes);
      this.setState({
        recipes
      });
    } catch (e) {
      console.error(e);
    }
  }
}

export default App
