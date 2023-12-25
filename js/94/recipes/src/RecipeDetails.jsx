import React from 'react'
import List from './List';
import { Component } from 'react';

export default class RecipeDetails extends Component {
  state = {
    pictureShowing: true
  };

  toggleShowPicture = () => {
    this.setState({
      pictureShowing: !this.state.pictureShowing
    });
  }

  render() {
    const { name, ingredients, directions, picture } = this.props.recipe;

    const { pictureShowing } = this.state;

    return (
      <>
        <h2>{name}</h2>
        <button onClick={this.toggleShowPicture}>{pictureShowing ? 'hide' : 'show'}</button>
        <br />
        {pictureShowing
          ? <img src={picture} style={{ width: '200px' }} />
          : null}
        <List name="ingredients" items={ingredients} />
        <List name="directions" items={directions} />
      </>
    );
  }
}
