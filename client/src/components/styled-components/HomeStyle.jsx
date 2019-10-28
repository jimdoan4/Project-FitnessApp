import styled from 'styled-components'


export const HomeContainer = styled.div`
.slider {
margin-right: 66px!important;
margin-left: 66px!important;
}
 /* img {
    margin-right: 20px!important;
}  */
h2{
  text-align:center;
  padding: 20px;
}

/* Slider */

.slick-slide {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px; 
}

.slide img {
    height: 25vw;
    width: 21.5vw!important;
    width: 100%;
}

.slide:hover img {
    opacity: 0.3;
    transition: .8s ease;
    backface-visibility: hidden;
  }

/* .button-centered {
  position: absolute;
  top: 80%;
  left: 40%;
  transform: translate(-50%, -50%);
} */

.fitness-button {
    background-color: black;
    color: white;
    border: 1px solid black;
    justify-content: center;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 13.5px;
    border-radius: 4px;
    letter-spacing: 4px;
}

.fitness-button:hover {
    box-shadow: 6px 3px 12px 4px #f7f6f5;
    color: black;
    background: white;
    border: 1px solid #f7f6f5;
    text-decoration: none;
    font-weight: bold;
  }

.slick-slider
{
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}

.slick-list
{
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.slick-list:focus
{
    outline: none;
}
.slick-list.dragging
{
    cursor: pointer;
    cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list
{
    -webkit-transform: translate3d(0, 0, 0);
       -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
         -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
}

.slick-track
{
    position: relative;
    top: 0;
    left: 0;
    display: block;
}
.slick-track:before,
.slick-track:after
{
    display: table;
    content: '';
}
.slick-track:after
{
    clear: both;
}
.slick-loading .slick-track
{
    visibility: hidden;
}

.slick-slide
{
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    
}
[dir='rtl'] .slick-slide
{
    float: right;
}
.slick-slide img
{
    display: block;
    
}
.slick-slide.slick-loading img
{
    display: none;
}
.slick-slide.dragging img
{
    pointer-events: none;
}
.slick-initialized .slick-slide
{
    display: block;
}
.slick-loading .slick-slide
{
    visibility: hidden;
}
.slick-vertical .slick-slide
{
    display: block;
    height: auto;
    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}

.row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 20px;
  }
  
  /* Create four equal columns that sits next to each other */
  .column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }
  
  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
    height: 32rem;
    transition: .5s ease;
    backface-visibility: hidden;

  }





  .column:hover img {
    opacity: 0.3;
  }


 
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      flex: 50%;
      max-width: 50%;
    }
  }
  
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      flex: 100%;
      max-width: 100%;
    }
    .column img {
        width: 100%;
      width: 45rem!important;
    }
}


`