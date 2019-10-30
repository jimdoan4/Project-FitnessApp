import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm.jsx";
import { RecipeContainer } from "./styled-components/RecipeStyles";

export default class Recipes extends Component {
  state = {
    recipes: [],
    newRecipe: {
      recipeName: "",
      recipeImg: "",
      ingredient: "",
      recipeDescription: "",
      cookingTime: ""
    },
    redirectToRecipe: false,
    displayRecipeForm: false
  };

  //Use the componentDidMount lifecycle method
  // to execute our API call as soon as the component mounts
  componentDidMount = () => {
    this.getAllRecipes();
  };

  //Function to get all Recipes from axios via our API
  getAllRecipes = () => {
    axios.get(`/api/recipes/`).then(res => {
      this.setState({ recipes: res.data });
      //   })
      //   .catch(err => {
      //     console.log("You messed up somewhere, Jim. Go back!", err);
    });
  };

  //Creates a New Recipe
  createRecipe = e => {
    e.preventDefault();
    axios
      .post("/api/recipes/", {
        recipeImg: this.state.newRecipe.recipeImg,
        recipeName: this.state.newRecipe.recipeName,
        cookingTime: this.state.newRecipe.cookingTime,
        ingredient: this.state.newRecipe.ingredient,
        recipeDescription: this.state.newRecipe.recipeDescription
      })
      .then(res => {
        const recipesList = [this.state.recipes];
        recipesList.unshift(res.data);
        this.setState({
          newRecipe: {
            recipeName: "",
            recipeImg: "",
            ingredient: "",
            recipeDescription: "",
            cookingTime: ""
          },
          displayRecipeForm: false,
          recipes: recipesList
        });
      });
  };

  //Toggles the Edit form
  toggleRecipeForm = () => {
    this.setState((state, props) => {
      return {
        displayRecipeForm: !state.displayRecipeForm
      };
    });
  };

  //Handles form change recipe value
  handleChange = e => {
    //Preserves Recipe State
    const cloneNewRecipe = { ...this.state.newRecipe };
    cloneNewRecipe[e.target.name] = e.target.value;
    this.setState({ newRecipe: cloneNewRecipe });
  };

  render() {
    return (
      <div>
        <div
          className="bg-dark text-white workout-margin workout-jumbo"
          style={{ marginBottom: "30px" }}
        >
          <img
            className="card-img"
            src="https://www.weightwatchers.com/ca/sites/ca/files/styles/wwvs_default_image/public/article_masthead/chicken_masthead_0.jpg?itok=OOndQXF-"
            alt="Recipe"
            style={{opacity: "75%"}}
          />
          <div className="card-img-overlay">
            <h1
              className="display-5 recipe-header centered workout-all-margin"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "4vw",
                padding: "15px"
              }}
            >
              RECIPES AND TIPS
            </h1>
          </div>
        </div>

        <RecipeContainer>
          <div className="flex-container">
              {this.state.recipes.map(recipe => {
                return (
                  <div key={recipe._id} className="grid-item text-center card-imgs">
                    <img
                    className="recipe-img"
                      src={recipe.recipeImg}
                      alt={recipe.recipeName}
  
                    />
                    <br />
                    <br />
                    <h3>{recipe.recipeName}</h3>
                    <div className="button-centered text-center">
                      <Link
                        to={`/recipes/${recipe._id}/`}
                        key={recipe._id}
                        className="recipe-link button-centered recipe-button"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
        </RecipeContainer>

        <br/>
        <div
          className="jumbotron jumbotron-fluid recipe-jumbotron"
          style={{ backgroundColor: "#e3dfda" }}
        >
          <div className="container">
            <RecipeForm
              recipe={this.state.newRecipe}
              handleSubmit={this.createRecipe}
              handleChange={this.handleChange}
              submitBtnText="SUBMIT"
            />
          </div>
        </div>
      </div>
    );
  }
}
