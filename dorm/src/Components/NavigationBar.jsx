
import { LinkContainer } from "react-router-bootstrap";
import { BASE_ROUTE, REGISTRATION_ROUTE, USER_LIST_ROUTE } from "../constants/AppRoute";

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
                        


                        <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2 "
                    
                    style={{ width: '380px', height: '40px' ,marginLeft: '80px' }}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" style={{ width: '70px', height: '40px' }} >Submit</Button>
                </Col>
              </Row>
            </Form>

                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}