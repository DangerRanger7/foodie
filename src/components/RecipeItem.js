import React from "react";

const RecipeItem = ({ recipe }) => {
  return (
    <div className="">
      <h3>{recipe.recipe.label}</h3>
      <a href={recipe.recipe.url} target="_blank">
        <img src={recipe.recipe.image} alt={recipe.recipe.image} />
      </a>
      <br />
      <a href={recipe.recipe.url} target="_blank">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeItem;
