import React, { Component } from "react";
import SingleExercise from "./SingleExercise";
import { Container } from "react-bootstrap";

export default class ExercisePage extends Component {
  state = {
    exerciseId: this.props.match.params.exerciseId
  };

  render() {
    return (
        <Container className="text-center">
              <SingleExercise exerciseId={this.state.exerciseId} />
        </Container>
    );
  }
}
