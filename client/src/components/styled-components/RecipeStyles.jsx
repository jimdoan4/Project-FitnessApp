import styled from 'styled-components'


export const RecipeContainer = styled.div`
background-color:"#e3dfda";
color: black;
font-family: "Lato", sans-serif !important;

}

.card {
    background-color: #faf9f2;
    color: black;
    box-shadow: 1px 1px 1px 0px #b3b3b3;
}
.cards:hover {
    box-shadow: 2px 3px 2px 2px #b3b3b3;
    height: 16vw;
    background-color: white!important;
    transition: box-shadow 1.2s;
}

hr {
width: 100%;
margin-left: auto;
margin-right: auto;
border: .8px solid #e6e6e6;
}


.recipe-image {
    margin-top: -50px;
    width: 21vw;
    height: 14vw;
    border-radius: 6%;
    box-shadow: 1px 1px 1px 1px #b3b3b3;
}


.recipe-title {
    color: black;
    font-weight: bold;
    font-size: 2.8vw;
    padding: 15px;
}


.recipe-submit-button {
    background-color: #f7f6f5;
    color: white;
    border: 1px solid #f7f6f5;
    justify-content: center;
    padding-left: 85px;
    padding-right: 85px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 4px;
    letter-spacing: 4px;
    font-weight: bold;
    font-size: 1.3rem;
}

.recipe-submit-button:hover {
  box-shadow: 1px 3px 12px 0px #b3b3b3;
  color: black;
  background: white;
}

.button-centered {
    margin-top: 25px!important;
    margin-bottom: 25px!important;
}
.recipe-button {
    background-color: white;
    color: black;
    border: .5px solid #e3e3e1;
    justify-content: center;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 13.5px;
    border-radius: 4px;
    letter-spacing: 2px;
}

.recipe-button:hover {
    box-shadow: 6px 3px 12px 4px #f7f6f5;
    color: black!important;
    background: white;
    border: 1px solid #f7f6f5;
    text-decoration: none;
    font-weight: bold;
  }


/**************************** MEDIA-QUERY-IPHONE X ***************************/
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .recipe-image {
    width: 5vw;
    height: 6vw;
}

.card {
    width: 300px;
}
.recipe-title {
    font-weight: bold;
    font-size: 7vw!important;
 
}
}


`