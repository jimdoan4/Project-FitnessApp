import React, { Component } from "react";
import SingleRecipe from "./SingleRecipe";
import { Container } from "react-bootstrap";



export default class RecipePage extends Component {
  state = {
    recipeId: this.props.match.params.recipeId
  };

  render() {
    return (
      <div> 
        <Container className="text-center">
              <SingleRecipe recipeId={this.state.recipeId} />
        </Container>
      </div>
    );
  }
}
