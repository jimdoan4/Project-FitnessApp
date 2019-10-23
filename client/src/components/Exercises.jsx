import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ExerciseForm from "./ExerciseForm.jsx";

export default class Exercises extends Component {
    state = {
    exercises: [],
    newExercise: {
      fitnessImg: "",
      type: "",
      instruction: "",
      difficulty: "",
      equipment: ""
    },
    redirectToExercise: false,
    displayExerciseForm: false
  };

  //Use the componentDidMount lifecycle method
  // to execute our API call as soon as the component mounts
  componentDidMount = () => {
    this.getAllExercises();
  };

  //Function to get all Facts from axios via our API
  getAllExercises = () => {
    axios
      .get(`/api/exercises/`)
      .then(res => {
        this.setState({ exercises: res.data });
    //   })
    //   .catch(err => {
    //     console.log("You messed up somewhere, Jim. Go back!", err);
      });
  };

  //Creates a New Exercise
  createExercise = e => {
    e.preventDefault();
    axios
      .post('/api/exercises/', {
        fitnessImg: this.state.newExercise.fitnessImg,
        type: this.state.newExercise.type,
        instruction: this.state.newExercise.instruction,
        equipment: this.state.newExercise.equipment,
        difficulty: this.state.newExercise.difficulty
      })
      .then(res => {
        const exercisesList = [this.state.exercises];
        exercisesList.unshift(res.data);
        this.setState({
          newExercise: {
            fitnessImg: "",
            type: "",
            instruction: "",
            difficulty: "",
            equipment: ""
          },
          displayExerciseForm: false,
          exercises: exercisesList
        
        });
      });
  };

  // Deletes an exercise
  deleteExercise = () => {
    axios
      .delete(`/api/exercises/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ redirectToHome: true });
      });
  };

  //Toggles the Edit form
toggleExerciseForm = () => {
    this.setState((state, props) => {
      return {
        displayExerciseForm: !state.displayExerciseForm
      };
    });
  };

  //Handles form change exercise value
  handleChange = e => {
    //Preserves exercise State
    const cloneNewExercise = { ...this.state.newExercise };
    cloneNewExercise[e.target.name] = e.target.value;
    this.setState({ newExercise: cloneNewExercise });
  };

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }

    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://media.self.com/photos/57dc11208a461ae034a90dc8/8:3/w_1280,c_limit/sub-channel-fitness-workouts.jpg"
            alt="Workout"
          />
          <div className="card-img-overlay">
            <h5 className="card-title centered workout-text workout-all-margin">
              WORKOUTS
            </h5>
          </div>
        </div>
        <hr className="individual-underline container audio-card-margin"></hr>
        <div className="card-flex">
          {this.state.exercises.map(exercise => {
            return (
              <div key={exercise._id} className="card-flex">
                <div
                  className="card bg-dark text-white audio-card-margin"
                  style={{ maxWidth: "650px" }}
                >
                  <img
                    className="card-img"
                    src={exercise.fitnessImg}
                    alt={exercise.type}
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title centered scale">
                      <Link
                        to={`/exercises/${exercise.id}/`}
                        className="workout-link"
                      >
                        {exercise.type}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1>Create Workout</h1>
        <div className="jumbotron jumbotron-fluid recipe-jumbotron">
          <div className="container">
            <ExerciseForm
              exercise={this.state.newExercise}
              handleChange={this.handleChange}
              handleSubmit={this.createExercise}
              submitBtnText="Create"
            />
          </div>
        </div>
      
      </div>
    );
  }
}
