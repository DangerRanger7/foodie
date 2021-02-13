import React from "react";

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item">
      <h3 className="red">{recipe.recipe.label}</h3>
      <a href={recipe.recipe.url} target="_blank">
        <img src={recipe.recipe.image} alt={recipe.recipe.image} />
      </a>
      <br />
      <a href={recipe.recipe.url} target="_blank" className="red recipeLink">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeItem;
