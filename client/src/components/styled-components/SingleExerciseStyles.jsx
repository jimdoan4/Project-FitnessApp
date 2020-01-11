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
  width: 53%;
  max-height: 48rem;
  border-radius: 5px;
  box-shadow: 1px 0px 1px 0px #b3b3b3;


}

.edit-exercise-button {
    background-color: white;
    color: black;
    border: .5px solid #e3e3e1;
    margin-right: 10px;
    margin-top: 13px;
    margin-bottom: 13px;
    border-radius: 4px;
    letter-spacing: 4px;
    padding: 15px 30px 15px 30px;
    font-size: 15px;
}

.edit-exercise-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.delete-exercise-button {
    background-color: white;
    color: black;
    border: .5px solid #e3e3e1;
    margin-top: 13px;
    margin-bottom: 13px;
    border-radius: 4px;
    letter-spacing: 4px;
    padding: 15px 30px 15px 30px;
    font-size: 15px;
}

.delete-exercise-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.submit-button {
    background-color: white;
    color: black;
    border: .5px solid #e3e3e1;
    justify-content: center;
    padding-left: 60px;
    padding-right: 60px;
    margin-top: 1px;
    margin-bottom: 20px;
    border-radius: 4px;
    letter-spacing: 4px;
    padding: 10px 20px 10px 20px;
    font-size: 15px;
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

.form-exercise {
    padding-top: 16px!important;
    padding-bottom: 16px!important;
    border-radius: 5px!important;
}


.jumbotron {
    margin-top: 30px;
    background-color: #e3dfda;

}
.add-form {
    background-color: white;
    border: 1px solid black;
}


`;