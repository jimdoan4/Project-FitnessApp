import React from "react";
import { ExerciseContainer } from "./styled-components/ExerciseStyle";

export default function ExerciseForm(props) {
  return (
    <ExerciseContainer>
      <h1
        className="text-center workout-title"
      >
        CREATE YOUR WORKOUT
      </h1>
      
      
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="fitnessImg">
            IMAGE URL
          </label>
          <input
            className="form-control"
            type="text"
            id="fitnessImg"
            name="fitnessImg"
            value={props.exercise.fitnessImg}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="type">
          EXERCISE NAME
          </label>
          <input
            className="form-control"
            type="text"
            id="type"
            name="type"
            value={props.exercise.type}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="equipment">
            EQUIPMENT NEEDED
          </label>
          <input
            className="form-control"
            type="text"
            id="equipment"
            name="equipment"
            value={props.exercise.equipment}
            onChange={props.handleChange}
          />
        </div>
   
        <div className="form-group col-md-4">
        <label htmlFor="difficulty">
           DIFFICULTY LEVEL
          </label>
          <input
            className="form-control"
            type="text"
            id="difficulty"
            name="difficulty"
            value={props.exercise.difficulty}
            onChange={props.handleChange}
          />
        </div>
         
      
        </div>
        <div className="form-group">
        <label htmlFor="instruction">
            INSTRUCTIONS
          </label>
          <textarea className="form-control"
            type="text"
            id="instruction"
            name="instruction"
            value={props.exercise.instruction}
            onChange={props.handleChange} rows="3"></textarea>
   
        </div>
        <div className="text-center form-group">
        <button className="exercise-submit-button bg-dark text-light">
          {props.submitBtnText}
        </button>
        </div>
      </form>
    </ExerciseContainer>
  );
}
