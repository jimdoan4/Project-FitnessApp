import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeForm from "./RecipeForm.jsx";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ApparelContainer } from "./styled-components/ApparelListStyles";
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
    axios
      .get(`/api/recipes/`)
      .then(res => {
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
      .post('/api/recipes/', {
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

  // Deletes a recipe
  deleteRecipe = () => {
    axios
      .delete(`/api/recipes/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ redirectToHome: true });
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
      <div className="bg-dark text-white workout-margin workout-jumbo">
                    <img className="card-img" src="https://foodrevolution.org/wp-content/uploads/2019/01/iStock-855098134-marilyna-featured.jpg" alt="Workout" />
                    <div className="card-img-overlay">
                        <h5 className="card-title centered workout-text">RECIPES</h5>
                    </div>
                </div>
                {/* <hr className="individual-underline container"></hr> */}
                <div className="card-flex">
                    {this.state.recipes.map(recipe => {
                        return (
                            <div className="flex-container card-flex" style={{ marginTop: "1rem", marginLeft: "2rem;" }}>
                                <div key={recipe._id} className="flex-container card-flex card-margin-all">
                                    <div className="card" style={{ width: "600px" }}>
                                        <img src={recipe.recipeImg} className="card-img-top" alt={recipe.recipeName} />
                                        <div className="card-body">
                                            <h5 className="card-title"><Link to={`/recipes/${recipe.id}/`}>{recipe.recipeName}</Link></h5>
                                            <p className="card-text">Cook Time: {recipe.cookingTime}</p>
                                            <p className="card-text">Calories: {recipe.ingredient}</p>
                                            <p className="card-text">Description: {recipe.recipeDescription}</p>
                                            <Link to={`/recipes/${recipe.id}/`} className="btn btn-primary">Get Recipe</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1 className="card-margin-all">Create Recipe</h1>
                <div className="jumbotron jumbotron-fluid recipe-jumbotron">
                    <div className="container">
                        <RecipeForm
                            recipe={this.state.newRecipe}
                            handleSubmit={this.createRecipe}
                            handleRecipeChange={this.handleChange}
                            submitBtnText="Create"
                        />
                    </div>
                </div>
                </div>
           

    );
  }
}


        