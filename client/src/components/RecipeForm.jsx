import React, { Component } from 'react'

export default function RecipeForm(props) {

    return (
   
                <div style={{backgroundColor:"#e3dfda"}}>
      <h1
        className="text-center"
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "2.8vw",
          padding: "15px"
        }}
      >
        CREATE YOUR RECIPE
      </h1>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="recipeName" className="text-white">Name:</label>
                    <input className="form-control"
                        type="text"
                        id="recipeName"
                        name="recipeName"
                        value={props.recipe.recipeName}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="recipeImg" className="text-white">Image URL:</label>
                    <input className="form-control"
                        type="text"
                        id="recipeImg"
                        name="recipeImg"
                        value={props.recipe.recipeImg}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredient" className="text-white">Ingredient:</label>
                    <input className="form-control"
                        type="text"
                        id="ingredient"
                        name="ingredient"
                        value={props.recipe.ingredient}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prep_time" className="text-white">Prep Time:</label>
                    <input className="form-control"
                        type="text"
                        id="cookingTime"
                        name="cookingTime"
                        value={props.recipe.cookingTime}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="recipeDescription" className="text-white">Description:</label>
                    <textarea className="form-control"
                        type="text"
                        id="recipeDescription"
                        name="recipeDescription"
                        value={props.recipeDescription}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div className="form-group text-center">
                    <button className="start-button">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}
