import React from 'react';
import './RecipeCard.css';
import recipes from './recipes.js'


const RecipeCard = (props) => {

const {filteredRecipes} = props;

const recipe = filteredRecipes.map((recipe) => {
  return (
      <div className='card'>
        <h1>{recipe.name}</h1>
        <h2>{recipe.time}</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>
          })}
        </ul>
        <p>{recipe.directions}</p>
      </div>
  )})


  return (
    <div className=''>
      {recipe}
    </div>
  )
}

export default RecipeCard;
