import React, { Component } from 'react';
import './App.css';
import RecipeCard from './RecipeCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Family Recipes</h2>
        </div>
        <RecipeCard />
      </div>
    );
  }
}

export default App;
