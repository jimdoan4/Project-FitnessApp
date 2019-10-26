import styled from 'styled-components'


export const NavContainer = styled.div`
.topnav {
    overflow: hidden;
    background-color: #071e52;
    height: 5rem;
    box-shadow: 2px 2px 1px 2px #b3b3b3;
    /* border: .8px solid #b3b3b3; */
}
  
  .topnav a {
    float: left;
    display: block;
    color: white;
    font-weight: bold;
    padding: 26px 36px;
    text-decoration: none;
    font-size: 16px;
  }
  
  .topnav a:hover {
    background-color: white;
    color: black;
    box-shadow: 1px 3px 2px 0px black;
  }
  

  
  .topnav .icon {
    display: none;
    font-size: 20px;
  }
  
  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {display: none;}
    .topnav a.icon {
      float: right;
      display: block;
    }
  }
  
  @media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
 

`



