import { Component } from 'react'
import './App.css'
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';

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

  selectRecipe = index => {
    console.log(index);

    this.setState({
      selectedRecipeIndex: index
    });
  }

  render() {
    const { recipes, selectedRecipeIndex } = this.state;
    const selectedRecipe = recipes[selectedRecipeIndex];

    const recipeDetailJsx = selectedRecipe ? <RecipeDetails recipe={selectedRecipe} /> : <h2>loading...</h2>;

    return (
      <div className="container text-center">
        <h1>PCS Recipes</h1>
        <RecipeList recipes={this.state.recipes} selectRecipe={this.selectRecipe} />
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
