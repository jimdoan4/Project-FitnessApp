import React, { Component } from 'react'

export default function ExerciseForm(props) {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fitnessImg" className="text-white">Fitness URL:</label>
                    <input className="form-control"
                        type="text"
                        id="fitnessImg"
                        name="fitnessImg"
                        value={props.exercise.fitnessImg}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type" className="text-white">Type:</label>
                    <input className="form-control"
                        type="text"
                        id="type"
                        name="type"
                        value={props.exercise.type}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="equipment" className="text-white">Equipment:</label>
                    <input className="form-control"
                        type="text"
                        id="equipment"
                        name="equipment"
                        value={props.exercise.equipment}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instruction" className="text-white">Instruction:</label>
                    <input className="form-control"
                        type="text"
                        id="instruction"
                        name="instruction"
                        value={props.exercise.instruction}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="v" className="text-white">Difficulty level:</label>
                    <input className="form-control"
                        type="text"
                        id="difficulty"
                        name="difficulty"
                        value={props.exercise.difficulty}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <button className="btn btn-primary btn-block">{props.submitBtnText}</button>
            </form>
        </div>
   )
}
