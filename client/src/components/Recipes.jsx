import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm.jsx";
import { SingleRecipeContainer } from "./styled-components/SingleRecipeStyles";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

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

  //Function to get all Facts from axios via our API
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
        <div className="bg-dark text-white workout-margin workout-jumbo" style={{ marginBottom:"30px" }}>
          <img
            className="card-img"
            src="https://www.rd.com/wp-content/uploads/2018/04/50-Fitness-Myths-that-can-Seriously-Damage-Your-Health-15-760x506.jpg"
            alt="Workout"
          />
          <div className="card-img-overlay">
          <h1
              className="display-5 centered workout-all-margin"
              style={{
               color:"white",
                fontWeight: "bold",
                fontSize: "5vw",
                padding: "15px"
              }}
            >
              CHECK OUT OUR RECIPES
            </h1>
          </div>
        </div>

        <div className="container">
          {this.state.recipes.map(recipe => {
            return (
              <div class="media jumbotron" style={{ backgroundColor:"white" }}>
                <img
                  src={recipe.recipeImg}
                  class="align-self-start mr-3"
                  alt={recipe.recipeName}
                  style={{ width: "23rem", height: "17rem" }}
                />
                <div class="media-body text-center" key={recipe._id}>
                  <h3 class="mt-2 display-5">{recipe.recipeName}</h3>
                  <p class="lead">Cook Time: {recipe.cookingTime}</p>
                  <p class="lead">{recipe.recipeDescription}</p> 
                  <br />
                  <Link to={`/recipes/${recipe._id}/`} key={recipe._id} className="recipe-button">
                    GET THE RECIPE
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="jumbotron jumbotron-fluid recipe-jumbotron" style={{backgroundColor:"#e3dfda"}}>
          <div className="container">
            <RecipeForm
              recipe={this.state.newRecipe}
              handleSubmit={this.createRecipe}
              handleChange={this.handleRecipeChange}
              submitBtnText="SUBMIT"
            />
          </div>
        </div>
      </div>
    );
  }
}
