import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes }) => {
  const renderedList = recipes.map((recipe) => {
    return <RecipeItem recipe={recipe} key={recipe.recipe.url} />;
  });
  return <div className="recipe-list center">{renderedList}</div>;
};

export default RecipeList;
