import React, { Component } from "react";

export default function ExerciseForm(props) {
  return (
    <div style={{backgroundColor:"#e3dfda"}}>
      <h1
        className="text-center"
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "2.8vw",
          padding: "15px"
        }}
      >
        CREATE YOUR WORKOUT
      </h1>
      
      
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="fitnessImg" className="text-white">
            Fitness URL:
          </label>
          <input
            className="form-control"
            type="text"
            id="fitnessImg"
            name="fitnessImg"
            value={props.exercise.fitnessImg}
            onChange={props.handleExerciseChange}
          />
        </div>
        <div class="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="type" className="text-white">
            Type:
          </label>
          <input
            className="form-control"
            type="text"
            id="type"
            name="type"
            value={props.exercise.type}
            onChange={props.handleExerciseChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="equipment" className="text-white">
            Equipment:
          </label>
          <input
            className="form-control"
            type="text"
            id="equipment"
            name="equipment"
            value={props.exercise.equipment}
            onChange={props.handleExerciseChange}
          />
        </div>
   
        <div className="form-group col-md-4">
        <label htmlFor="v" className="text-white">
            Difficulty level:
          </label>
          <input
            className="form-control"
            type="text"
            id="difficulty"
            name="difficulty"
            value={props.exercise.difficulty}
            onChange={props.handleExerciseChange}
          />
        </div>
         
      
        </div>
        <div className="form-group">
        <label htmlFor="instruction" className="text-white">
            Instruction:
          </label>
          <textarea className="form-control"
            type="text"
            id="instruction"
            name="instruction"
            value={props.exercise.instruction}
            onChange={props.handleExerciseChange} rows="3"></textarea>
   
        </div>
        <div className="text-center form-group">
        <button className="start-button">
          {props.submitBtnText}
        </button>
        </div>
      </form>
    </div>
  );
}
