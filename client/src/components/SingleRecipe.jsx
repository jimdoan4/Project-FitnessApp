import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { SingleRecipeContainer } from "./styled-components/SingleRecipeStyles";

class SingleRecipe extends Component {
      // We'll set up the  array as an empty array to begin with
  state = {
    recipeId: this.props.recipeId,
    recipes: [],
    recipe: {
      _id: "",
      recipeName: "",
      recipeImg: "",
      ingredient: "",
      recipeDescription: "",
      cookingTime: ""
    
    },
    redirectToSingleRecipe: false,
    displayEditForm: false
  };

  getRecipeData = () => {
    axios.get(`/api/recipes/${this.state.recipeId}`).then(res => { // When the page loads, grab apparel id from the database
      this.setState({ recipe: res.data });
    });
  };

  componentDidMount = () => {
    this.getRecipeData();
  };

  toggleEditForm = () => {  // This toggle the apparel button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  handleChange = e => {
    const updatedRecipe = { ...this.state.recipe };
    updatedRecipe[e.target.name] = e.target.value;
    this.setState({ recipe: updatedRecipe });
  };

  updateRecipe = e => {
    e.preventDefault();
    axios
      .put(`/api/recipes/${this.state.recipeId}`, {   // ask the server to update the apparel in the database
        recipeImg: this.state.recipe.recipeImg,
        recipeName: this.state.recipe.recipeName,
        cookingTime: this.state.recipe.cookingTime,
        ingredient: this.state.recipe.ingredient,
        recipeDescription: this.state.recipe.recipeDescription
      })
      .then(res => {
        this.setState({ recipe: res.data, displayEditForm: false });
      });
    this.getRecipeData();
  };

  deleteRecipe = () => {
    axios.delete(`/api/recipes/${this.state.recipeId}`).then(res => { // Ask the server to delete this apparel
      this.setState({ redirectToSingleRecipe: true });
    });
  };

  render() {
    if (this.state.redirectToSingleRecipe) {
      return <Redirect to={`/recipes/`} />;
    }
    return (
      <SingleRecipeContainer>
        <div className="container">
            <Card>
            <Card.Title className="recipe-main-title">
                  {this.state.recipe.recipeName}
                </Card.Title>
              <Card.Img
                variant="top"
                src={this.state.recipe.recipeImg}
                alt="top"
                className="recipe-img"
              />
              <Card.Body>
                <Card.Title className="product-title">
                  {this.state.recipe.cookingTime}
                </Card.Title>
                <Card.Title className="product-title">
                  {this.state.recipe.ingredient}
                </Card.Title>
                <Card.Title className="product-title">
                {this.state.recipe.recipeDescription}
                </Card.Title>
              </Card.Body>


              <Container
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                  marginTop: "8px"
                }}
              >
                <Button
                  className="edit-apparel-button"
                  onClick={this.toggleEditForm}
                >
                  Edit Recipe
                </Button>

                <Button
                  className="delete-apparel-button"
                  onClick={this.deleteRecipe}
                >
                  Delete 
                </Button>
              </Container>
            </Card>
       
        </div>
        {this.state.displayEditForm ? (
          <Form className="jumbotron" onSubmit={this.updateRecipe}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                className="text-center"
                id="recipeName"
                type="text"
                name="recipeName"
                onChange={this.handleChange}
                value={this.state.recipe.recipeName}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                className="text-center"
                id="recipeImg"
                type="text"
                name="recipeImg"
                onChange={this.handleChange}
                value={this.state.recipe.recipeImg}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                className="text-center"
                id="cookingTime"
                type="text"
                name="cookingTime"
                onChange={this.handleChange}
                value={this.state.recipe.cookingTime}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                className="text-center"
                id="ingredient"
                type="text"
                name="ingredient"
                onChange={this.handleChange}
                value={this.state.recipe.ingredient}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                className="text-center"
                id="recipeDescription"
                type="text"
                name="recipeDescription"
                onChange={this.handleChange}
                value={this.state.recipe.recipeDescription}
              />
            </Form.Group>
            <div
              className="text-center"
              style={{ marginTop: "20px" }}
            >
              <Button className="text-center submit-button">Submit</Button>
            </div>
          </Form>
        ) : null}
      </SingleRecipeContainer>
    );
  }
}

export default SingleRecipe;
