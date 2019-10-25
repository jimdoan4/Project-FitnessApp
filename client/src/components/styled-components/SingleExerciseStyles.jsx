import styled from 'styled-components'

export const SingleExerciseContainer=styled.div ` 
    font-family: "Lato", sans-serif !important;
    margin-top: 30px;
    margin-bottom: 30px;
}


.exercise-title {
    font-size: 15px;
}

.exercise-main-title {
    font-size: 40px;
    margin-top: 30px;
    font-weight: bold;
}

.exercise-img {

   display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  max-height: 29rem;

}

.edit-exercise-button {
    background-color: white;
    color: black;
    border: 1px solid black;
    margin-right: 10px;
    margin-top: 13px;
    margin-bottom: 13px;
}

.edit-exercise-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.delete-exercise-button {
    background-color: white;
    color: black;
    border: 1px solid black;
    margin-top: 13px;
    margin-bottom: 13px;
}

.delete-exercise-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.submit-button {
    background-color: white;
    color: black;
    border: 1px solid black;
    justify-content: center;
    padding-left: 60px;
    padding-right: 60px;
    margin-top: 1px;
    margin-bottom: 20px;
}

.submit-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.form-label {
    text-align: left;
    font-size: 15px;
}

.add-form {
    background-color: white;
    border: 1px solid black;
}


`;