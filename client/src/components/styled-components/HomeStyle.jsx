import styled from 'styled-components'


export const HomeContainer = styled.div`

h2{
  text-align:center;
  padding: 20px;
}

/* Slider */
.slick-slide {
    display: flex;
    flex-wrap: wrap;
  justify-content: space-around;
}

.slide img {
    width: 280px;
height: 260px;
border-radius: 4px;
}

.slide:hover img {
    opacity: 0.3;
    transition: .8s ease;
    backface-visibility: hidden;
  }


.fitness-button {
    background-color: black;
    color: white;
    border: 1px solid black;
    justify-content: center;
    padding-left: 23px;
    padding-right: 23px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 13px;
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

/* @media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 2) { 
  .slide img {
    height: 235px;
    width: 226px!important;
  }
} */

`
