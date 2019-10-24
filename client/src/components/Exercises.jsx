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
    axios.get(`/api/exercises/`).then(res => {
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
      .post("/api/exercises/", {
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
    axios.delete(`/api/exercises/${this.props.match.params.id}`).then(res => {
      this.setState({ redirectToExercise: true });
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
  handleExerciseChange = e => {
    //Preserves exercise State
    const cloneNewExercise = { ...this.state.newExercise };
    cloneNewExercise[e.target.name] = e.target.value;
    this.setState({ newExercise: cloneNewExercise });
  };

  render() {
    return (
      <div>
        <div className="bg-dark text-white workout-margin workout-jumbo">
          <img
            className="card-img"
            src="https://media1.popsugar-assets.com/files/thumbor/qXuXqZVe_owQHwjPh7K_g4AYBX8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/12/852/n/1922729/tmp_3bt1XK_9be64c1ae32a73e1_01_WaterRower-00222.jpg"
            alt="Workout"
          />
          <div className="card-img-overlay">
            <h1
              className="display-5 centered workout-all-margin"
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "4vw",
                padding: "15px"
              }}
            >
              GET YOUR WORKOUT IN
            </h1>
          </div>
        </div>
        <div
          class="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "white" }}
        >
          <div class="container text-center">
            <h1 class="display-5">PERSONAL TRAINING AT ATLANTA CYCLE GYM</h1>
            <p class="lead">
              You can, and you will. With the right personal trainer, you’re
              partners in the impossible.
            </p>
            <button className="start-button">GET STARTED TODAY</button>
          </div>
        </div>

        <div className="card-flex">
          {this.state.exercises.map(exercise => {
            return (
              <div key={exercise._id} className="card-flex">
                <div
                  className="card bg-dark text-white"
                  style={{ maxWidth: "530px", marginTop: "30px" }}
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
        <div
          className="jumbotron jumbotron-fluid recipe-jumbotron"
          style={{ backgroundColor: "#e3dfda" }}
        >
          <div className="container">
            <ExerciseForm
              exercise={this.state.newExercise}
              handleChange={this.handleExerciseChange}
              handleSubmit={this.createExercise}
              submitBtnText="SUBMIT"
            />
          </div>
        </div>
      </div>
    );
  }
}
