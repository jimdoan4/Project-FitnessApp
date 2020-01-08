import styled from 'styled-components'


export const FooterContainer = styled.div`

section {
            padding: 60px 0;
        }
ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

.contact-area {
    border-bottom: 1px solid #353C46;
}

.contact-content p {
    font-size: 21px;
    margin: 30px 60px;
    position: relative;
}

.contact-content h6 {
    color: black;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
}

.contact-content span {
    color: #353c47;
    margin: 0 10px;
}

.contact-social {
    margin-top: 30px;
}

.contact-social > ul {
    display: inline-flex;
}

.contact-social ul li a {
    border: 1px solid #8b9199;
    color: white;
    background: black;
    display: inline-block;
    height: 40px;
    margin: 0 10px;
    padding-top: 7px;
    transition: all 0.4s ease 0s;
    width: 40px;
    border-radius: 5px;
}

.contact-social ul li a:hover {
    border: 1px solid white;
    color: black;
    background: white;
}

section, footer {
  background-color: #e3dfda;
    color: black;
}

footer p {
    padding: 40px 0;
    text-align: center;
    margin-bottom: -90px;
}


`
