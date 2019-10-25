import React, { Component } from "react";
import { RecipeContainer } from "./styled-components/RecipeStyles";

export default function RecipeForm(props) {
  return (
    <RecipeContainer>
      <h1 className="text-center recipe-title">CREATE YOUR RECIPE</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="recipeName">RECIPE NAME</label>
          <input
            className="form-control"
            type="text"
            id="recipeName"
            name="recipeName"
            value={props.recipe.recipeName}
            onChange={props.handleRecipeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipeImg">IMAGE URL</label>
          <input
            className="form-control"
            type="text"
            id="recipeImg"
            name="recipeImg"
            value={props.recipe.recipeImg}
            onChange={props.handleRecipeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredient">INGREDIENTS</label>
          <input
            className="form-control"
            type="text"
            id="ingredient"
            name="ingredient"
            value={props.recipe.ingredient}
            onChange={props.handleRecipeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prep_time">PREP TIME</label>
          <input
            className="form-control"
            type="text"
            id="cookingTime"
            name="cookingTime"
            value={props.recipe.cookingTime}
            onChange={props.handleRecipeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipeDescription">DESCRIPTION</label>
          <textarea
            className="form-control"
            type="text"
            id="recipeDescription"
            name="recipeDescription"
            value={props.recipeDescription}
            onChange={props.handleRecipeChange}
          />
        </div>
        <div className="form-group text-center">
          <button className="recipe-submit-button">SUBMIT</button>
        </div>
      </form>
    </RecipeContainer>
  );
}
