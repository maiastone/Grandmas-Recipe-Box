import React, { Component } from 'react';
import './App.css';
import RecipeCard from './RecipeCard.js';
import DropDown from './DropDown.js';
import recipes from './recipes.js'

class App extends Component {




  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Family Recipes</h2>
        </div>
        <DropDown recipes={recipes}/>
        <RecipeCard />
      </div>
    );
  }
}

export default App;
