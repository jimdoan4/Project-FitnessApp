import styled from 'styled-components'


export const FooterContainer = styled.div`
.nav {
  /* box-shadow: 2px 2px 1px 2px #b3b3b3; */
  padding-top: 50px;
  padding-bottom: 50px;
   background-color: #e3dfda; 
  
 

}
.nav-link {
  font-size: 15px;
  margin-right: 40px;
  color: black!important;
}

.nav-link:hover {
font-weight: bold;
  color: black!important;

}
.footer {
    /* position: fixed; */
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    text-align: center;
    overflow: hidden;
    background-color: #071e52;
    height: 6rem!important;
    box-shadow: 0px 0px 1px 0px #b3b3b3;
    /* border: .8px solid #b3b3b3; */
 }

  
  .footer a {
    float: left;
    display: block;
    color: white;
    font-weight: bold;
    padding: 36px 26px;
    text-decoration: none;
    font-size: 14px;
    /* margin-bottom: 30px!important; */
  }

`
