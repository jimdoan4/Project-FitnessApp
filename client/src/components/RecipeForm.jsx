import React, { Component } from "react";
import { RecipeFormContainer } from "./styled-components/RecipeFormStyle";

export default function RecipeForm(props) {
  return (
    <RecipeFormContainer>
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
            onChange={props.handleChange}
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
            onChange={props.handleChange}
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
            onChange={props.handleChange}
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
            onChange={props.handleChange}
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
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group text-center">
          <button className="recipe-submit-button bg-dark text-light">SUBMIT</button>
        </div>
      </form>
    </RecipeFormContainer>
  );
}
