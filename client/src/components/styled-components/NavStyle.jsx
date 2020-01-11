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
    background: rgba(0, 0, 0, 0.7) !important;
    transition: background-color 1s ease 0s;
  }

`



