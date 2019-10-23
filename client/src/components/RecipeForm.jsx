import React, { Component } from 'react'

export default function RecipeForm(props) {

    return (
        <div>
            <h1 className="text-white"></h1>
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
                    <label htmlFor="recipeDirection" className="text-white">Directions:</label>
                    <textarea className="form-control"
                        type="text"
                        id="recipeDirection"
                        name="recipeDirection"
                        value={props.recipeDirection}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
    )
}
