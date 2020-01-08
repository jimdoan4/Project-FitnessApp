import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { SingleExerciseContainer } from "./styled-components/SingleExerciseStyles";

class SingleExercise extends Component {
  // We'll set up the  array as an empty array to begin with
  state = {
    exerciseId: this.props.exerciseId,
    exercises: [],
    exercise: {
      _id: "",
      instruction: "",
      fitnessImg: "",
      type: "",
      difficulty: "",
      equipment: ""
    },
    redirectToSingleExercise: false,
    displayEditForm: false
  };

  //Function to get a single exercise from axios via our API
  getExerciseData = () => {
    axios.get(`/api/exercises/${this.state.exerciseId}`).then(res => {
      // When the page loads, grab apparel id from the database
      this.setState({ exercise: res.data });
    });
  };

  componentDidMount = () => {
    this.getExerciseData();
  };

  toggleEditForm = () => {
    // This toggle the edit button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  //Handles form change exercise value
  handleChange = e => {
    //Preserves exercise State
    const updatedExercise = { ...this.state.exercise };
    updatedExercise[e.target.name] = e.target.value;
    this.setState({ exercise: updatedExercise });
  };

  // Update an exercise
  updateExercise = e => {
    e.preventDefault();
    axios
      .put(`/api/exercises/${this.state.exerciseId}`, {
        // ask the server to update the exercise in the database
        fitnessImg: this.state.exercise.fitnessImg,
        type: this.state.exercise.type,
        instruction: this.state.exercise.instruction,
        equipment: this.state.exercise.equipment,
        difficulty: this.state.exercise.difficulty
      })
      .then(res => {
        this.setState({ exercise: res.data, displayEditForm: false });
      });
    this.getExerciseData();
  };

  // Deletes an exercise
  deleteExercise = () => {
    axios.delete(`/api/exercises/${this.state.exerciseId}`).then(res => {
      // Ask the server to delete this exercise
      this.setState({ redirectToSingleExercise: true });
    });
  };

  render() {
    if (this.state.redirectToSingleExercise) {
      return <Redirect to={`/exercises/`} />;
    }
    return (
      <SingleExerciseContainer>
        <div className="container">
          <Card>
            <Card.Title className="exercise-main-title">
              {this.state.exercise.type}
            </Card.Title>
            <Card.Img
              variant="top"
              src={this.state.exercise.fitnessImg}
              alt="top"
              className="exercise-img"
            />
            <Card.Body>
              <Card.Title className="exercise-title">
                {this.state.exercise.equipment}
              </Card.Title>
              <Card.Title className="exercise-title">
                {this.state.exercise.instruction}
              </Card.Title>
              <Card.Title className="exercise-title">
                {this.state.exercise.difficulty}
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
                className="edit-exercise-button bg-dark text-light"
                onClick={this.toggleEditForm}
              >
                EDIT
              </Button>

              <Button
                className="delete-exercise-button bg-dark text-light"
                onClick={this.deleteExercise}
              >
                DELETE
              </Button>
            </Container>
          </Card>
        </div>
        {this.state.displayEditForm ? (
          <Form className="jumbotron" onSubmit={this.updateExercise}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>IMAGE URL</Form.Label>
              <Form.Control
                type="text"
                className="text-center form-exercise"
                id="fitnessImg"
                name="fitnessImg"
                onChange={this.handleChange}
                value={this.state.exercise.fitnessImg}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>NAME OF WORKOUT</Form.Label>
              <Form.Control
                className="text-center form-exercise"
                id="type"
                type="text"
                name="type"
                onChange={this.handleChange}
                value={this.state.exercise.type}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>DIFFICULTY LEVEL</Form.Label>
              <Form.Control
                type="text"
                className="text-center form-exercise"
                id="difficulty"
                name="difficulty"
                onChange={this.handleChange}
                value={this.state.exercise.difficulty}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>EQUIPMENT USED</Form.Label>
              <Form.Control
                type="text"
                className="text-center form-exercise"
                id="equipment"
                name="equipment"
                onChange={this.handleChange}
                value={this.state.exercise.equipment}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>INSTRUCTIONS</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                className="text-center form-exercise"
                id="instruction"
                name="instruction"
                onChange={this.handleChange}
                value={this.state.exercise.instruction}
              />
            </Form.Group>
            <div className="text-center" style={{ marginTop: "20px" }}>
              <Button className="text-center submit-button bg-dark text-light">SUBMIT</Button>
            </div>
          </Form>
        ) : null}
      </SingleExerciseContainer>
    );
  }
}

export default SingleExercise;
