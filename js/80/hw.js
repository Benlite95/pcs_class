/* global $ */
(async function () {
  'use strict';

  /*
  const recipeSelect = $('#recipes');
  const recipeStuff = $('.recipe');
  const recipeName = $('#name');
  const recipePicture = $('#picture');
  const recipeIngredients = $('#ingredients');

  try {
    const response = await fetch('recipes.json');
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const recipes = await response.json();
    recipes.forEach(recipe => {
      recipeSelect.append(`<option value="${recipe.id}">${recipe.name}</option>`);
    });

    recipeSelect.change(async /*e =>* /function (e) {
      //console.log(e.target);
      //console.log('recipe selected', e.target.value);
      //console.log('recipe selected', recipeSelect.val());
      //console.log($('option:selected')[0]);
      //console.log(this.value);

      try {
        const response2 = await fetch(`${this.value}.json`);
        if (!response2.ok) {
          throw new Error(`${response2.status} ${response2.statusText}`);
        }
        const recipe = await response2.json();
        console.log(recipe);

        recipeStuff.show();
        recipeName.text(recipe.name);
        recipePicture.attr('src', recipe.picture);

        recipeIngredients.empty();
        recipe.ingredients.forEach(ingredient => {
          recipeIngredients.append(`<li>${ingredient}</li>`);
        });

      } catch (e) {
        console.error('inner', e.message);
      }
    });
  } catch (e) {
    console.error('outer', e.message);
  }*/

  const recipeSelect = $('#recipes');
  const recipeStuff = $('.recipe');
  const recipeName = $('#name');
  const recipePicture = $('#picture');
  const recipeIngredients = $('#ingredients');

  async function fetchJson(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e.message);
    }
  }

  async function selectRecipe() {
    const recipe = await fetchJson(`${this.value}.json`);
    console.log(recipe);

    recipeStuff.show();
    recipeName.text(recipe.name);
    recipePicture.attr('src', recipe.picture);

    recipeIngredients.empty();
    recipe.ingredients.forEach(ingredient => {
      recipeIngredients.append(`<li>${ingredient}</li>`);
    });
  }

  async function loadRecipes() {
    const recipes = await fetchJson('recipes.json');
    recipes.forEach(recipe => {
      recipeSelect.append(`<option value="${recipe.id}">${recipe.name}</option>`);
    });
    recipeSelect.change(selectRecipe);
  }

  loadRecipes();
}());
