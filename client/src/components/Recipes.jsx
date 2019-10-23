import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm.jsx";

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
    isRecipeFormDisplayed: false,
    redirectToHome: false
  };

  //Use the componentDidMount lifecycle method
  // to execute our API call as soon as the component mounts
  componentDidMount = () => {
    this.getAllRecipes();
  };

  //Function to get all Facts from axios via our API
  getAllRecipes = () => {
    axios
      .get(`/api/recipes`)
      .then(response => {
        const recipes = response.data;
        this.setState({ recipes: recipes });
      })
      .catch(err => {
        console.log("You messed up somewhere, Jim. Go back!", err);
      });
  };

  //Creates a New Event
  createRecipe = recipe => {
    recipe.preventDefault();
    axios
      .post("/api/recipes", {
        recipeImg: this.state.newRecipes.recipeImg,
        recipeName: this.state.newRecipes.recipeName,
        cookingTime: this.state.newRecipes.cookingTime,
        ingredient: this.state.newRecipes.ingredient,
        recipeDescription: this.state.newRecipes.recipeDescription
      })
      .then(response => {
        const recipeList = [...this.state.recipes];
        recipeList.push(response.data);
        this.setState({
          newRecipes: {
            recipeName: "",
            recipeImg: "",
            ingredient: "",
            recipeDescription: "",
            cookingTime: ""
          },
          isRecipeFormDisplayed: false,
          recipes: recipeList,
          redirectToHome: true
        });
      });
  };

  // Deletes an event
  deleteRecipe = () => {
    axios
      .delete(`/api/recipes/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ redirectToHome: true });
      });
  };

  //Toggles the Edit form
  displayRecipeForm = () => {
    this.setState((state, props) => {
      return {
        isRecipeFormDisplayed: !state.isRecipeFormDisplayed
      };
    });
  };

  //Handles form change recipe value
  handleFormChange = recipe => {
    //Preserves Recipe State
    const cloneNewRecipe = { ...this.state.newRecipes };
    cloneNewRecipe[recipe.target.name] = recipe.target.value;
    this.setState({ newRecipes: cloneNewRecipe });
  };

  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://foodrevolution.org/wp-content/uploads/2019/01/iStock-855098134-marilyna-featured.jpg"
            alt="Workout"
          />
          <div className="card-img-overlay">
            <h5 className="card-title centered workout-text">RECIPES</h5>
          </div>
        </div>
        <hr className="individual-underline container"></hr>
        <div className="card-flex">
          {this.state.recipes.map(recipe => {
            return (
              <div
                className="flex-container card-flex"
                style={{ marginTop: "1rem", marginLeft: "2rem;" }}
              >
                <div
                  key={recipe.id}
                  className="flex-container card-flex card-margin-all"
                >
                  <div className="card" style={{ width: "600px" }}>
                    <img
                      src={recipe.recipeImg}
                      className="card-img-top"
                      alt={recipe.recipeName}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/recipes/${recipe.id}/`}>
                          {recipe.recipeDescription}
                        </Link>
                      </h5>
                      <p className="card-text">
                        Cook Time: {recipe.cookingTime}
                      </p>
                      <p className="card-text">Calories: {recipe.ingredient}</p>
                      <Link
                        to={`/recipes/${recipe.id}/`}
                        className="btn btn-primary"
                      >
                        Get Recipe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="card-margin-all">Create Recipe</h1>
        <div className="jumbotron jumbotron-fluid recipe-jumbotron">
          <div className="container">
            <RecipeForm
              recipe={this.state.newRecipe}
              handleSubmit={this.createRecipe}
              handleRecipeChange={this.handleRecipeChange}
              submitBtnText="Create"
            />
          </div>
        </div>
      </div>
    );
  }
}
