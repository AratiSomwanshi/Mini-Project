
import { LinkContainer } from "react-router-bootstrap";
import { BASE_ROUTE, REGISTRATION_ROUTE, USER_LIST_ROUTE,DORM_SEARCH, SIGN_UP, LOGIN } from "../constants/AppRoute";

import { Button, Col, Container, Form, Row ,Nav , Navbar} from "react-bootstrap";
export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
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

                        <LinkContainer to={USER_LIST_ROUTE}>
                            <Nav.Link>UserList</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to ={DORM_SEARCH}>
                            <Nav.Link>SearchDorm</Nav.Link>
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