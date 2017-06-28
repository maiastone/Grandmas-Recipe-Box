import React, { Component } from 'react';
import './App.css';
import RecipeCard from './RecipeCard.js';
import DropDown from './DropDown.js';
import recipes from './recipes.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      filteredRecipes: [],
    }
  }

  filterByCategory(e, category) {
    let filteredRecipes = [];
    recipes.filter((recipe) => {
      if (recipe.category === e.target.innerHTML.toLowerCase())
      filteredRecipes.push(recipe)
      }
    )
    this.setState({
      filteredRecipes: filteredRecipes,
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Grandma&#39;s Recipe Box</h2>
        </div>
        <DropDown filterByCategory={this.filterByCategory.bind(this)}/>
        <RecipeCard />
      </div>
    );
  }
}

export default App;
