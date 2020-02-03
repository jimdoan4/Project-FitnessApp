import styled from 'styled-components'

export const SingleRecipeContainer=styled.div ` 
    font-family: "Lato", sans-serif !important;
    margin-top: 30px;
    margin-bottom: 30px;
}


.recipe-title {
    font-size: 15px;
}

.recipe-main-title {
    font-size: 3rem;
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: bold;
}

.recipe-img {
    display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  max-height: 400px;
  border-radius: 5px;
  box-shadow: 1px 0px 1px 0px #b3b3b3;

}

.edit-recipe-button {
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

.edit-recipe-button:hover {
    box-shadow: 1px 3px 12px 0px #b3b3b3;
    color: white;
    background: black;
}

.delete-recipe-button {
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

.delete-recipe-button:hover {
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

.form-recipe {
    padding-top: 16px!important;
    padding-bottom: 16px!important;
    border-radius: 5px!important;
}


.jumbotron {
    margin-top: 30px;
    background-color: #e3dfda;


.add-form {
    background-color: white;
    border: 1px solid black;
}


`;