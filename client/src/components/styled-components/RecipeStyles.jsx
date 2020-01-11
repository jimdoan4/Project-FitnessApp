import styled from 'styled-components'


export const RecipeContainer = styled.div`
background-color:"#e3dfda";
color: black;
font-family: "Lato", sans-serif !important;
}


.recipe-img:hover {
    box-shadow: 2px 3px 2px 2px #b3b3b3;
    height: 16vw;
    background-color: white!important;
    transition: box-shadow 1.2s;
}


.recipe-img {  
    width: 18.5vw;
    height: 16vw;
    border-radius: 3%;
}


.recipe-title {
    color: black;
    font-weight: bold;
    font-size: 2.8vw;
    padding: 15px;
}

.recipe-container {
  margin-top: 50px;
}

.recipe-submit-button {
    background-color: #f7f6f5;
    color: black;
    border: 1px solid #f7f6f5;
    justify-content: center;
    padding-left: 75px;
    padding-right: 75px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 4px;
    letter-spacing: 4px;
    font-weight: bold;
    font-size: 15px;
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
    color: white!important;
    background: white;
    border: 1px solid #f7f6f5;
    text-decoration: none;
    font-weight: bold;
  }


/**************************** MEDIA-QUERY-IPHONE X ***************************/
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {

.recipe-title {
    font-weight: bold;
    font-size: 7vw!important;
 }
 .recipe-img {  
    width: 225px;
    height: 210px;
  }
}


`