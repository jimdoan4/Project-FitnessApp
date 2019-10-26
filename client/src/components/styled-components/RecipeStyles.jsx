import styled from 'styled-components'


export const RecipeContainer = styled.div`
background-color:"#e3dfda";
color: black;
font-family: "Lato", sans-serif !important;

}
.card-img-overlay h1{
   color:white;
                font-weight: bold;
                font-size: 5vw;
                padding: 15px;
}
.jumbotron:hover {
    box-shadow: 2px 3px 2px 2px #b3b3b3;
    height: 16vw;
    background-color: white!important;
    margin-top: -11px;
    margin-bottom: -11px;
    transition: box-shadow 1.2s;
}

.recipe-side-margin {
    margin-left: 50px!important;
    margin-right: 50px;
}
hr {
width: 100%;
margin-left: auto;
margin-right: auto;
border: .8px solid #e6e6e6;
}

.media {
    margin-bottom: -60px;
    overflow: auto;
}

.media-body h4 {
    font-size: 1.7vw;
    text-decoration: underline;
    font-weight: bold;
}
.media-body p {
    font-size: 1.2vw;
    /* margin-left: 90px;
    margin-right: 90px; */

}
.recipe-image {
    margin-top: -50px;
    width: 21vw;
    height: 14vw;
    border-radius: 6%;
    box-shadow: 1px 1px 1px 1px #b3b3b3;
}

.media-body {
    margin-top: -40px;
}
.recipe-title {
    color: black;
    font-weight: bold;
    font-size: 2.8vw;
    padding: 15px;
}

.recipe-button {
    background-color: black;
    color: white;
    border: 1px solid black;
    justify-content: center;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 13px;
}

.recipe-button:hover {
    box-shadow: 1px 3px 12px 0px #e88000;
    color: white;
    background: #e88000;
    border: 1px solid #e88000;
    text-decoration: none;
    transition: box-shadow 3s;
  }

.recipe-submit-button {
    background-color: black;
    color: white;
    border: 1px solid black;
    justify-content: center;
    padding-left: 85px;
    padding-right: 85px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
}

.recipe-submit-button:hover {
  box-shadow: 1px 3px 12px 0px #b3b3b3;
  color: black;
  background: white;
}



`