import styled from 'styled-components'


export const NavContainer = styled.div`

.navbar {
    padding: .7rem 3rem; 
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
  }
  
  .navbar-nav li {
    padding-right: .96rem;
    color: white!important;
    margin: 0px 25px;
    font-weight: bold;
  }
  
  .navbar-nav .nav-link {
    color: black;
  }
  
  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link:hover {
    font-weight: bold;
  color: black!important;
  background-color: white;
  }
  
  .navbar.solid {
    background: white !important;
    transition: background-color 1s ease 0s;
  }


  @media (max-width: 967px) {
  /*hide nav by transform*/
  .navbar-nav {
   text-align: center;
    background-color: white;
    background-size: cover;
  
  }
}



`



