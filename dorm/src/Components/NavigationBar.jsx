
import { LinkContainer } from "react-router-bootstrap";

import { BASE_ROUTE, REGISTRATION_ROUTE, DORM_LIST_ROUTE,DORM_SEARCH ,ABOUT_US } from "../constants/AppRoute";


import { BASE_ROUTE, REGISTRATION_ROUTE, USER_LIST_ROUTE,DORM_SEARCH, SIGN_UP, LOGIN } from "../constants/AppRoute";


import { BASE_ROUTE, REGISTRATION_ROUTE, DORM_LIST_ROUTE,DORM_SEARCH } from "../constants/AppRoute";

import "./nav.css";

import {  Container,Nav , Navbar} from "react-bootstrap";
export function NavigationBar() {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="#home">DORM </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to={BASE_ROUTE}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to={REGISTRATION_ROUTE}>
                            <Nav.Link>Registration</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={DORM_LIST_ROUTE}>
                            <Nav.Link>DormBooking</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to ={DORM_SEARCH}>
                            <Nav.Link>SearchDorm</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={ABOUT_US}>
                  <Nav.Link>AboutUs </Nav.Link>
                </LinkContainer>


                        <LinkContainer to ={SIGN_UP}>
                            <Nav.Link>Sign Up</Nav.Link>
                        </LinkContainer>
                   
                        <LinkContainer to ={LOGIN}>
                            <Nav.Link>LogIn</Nav.Link>
                        </LinkContainer>
                   



             


                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
