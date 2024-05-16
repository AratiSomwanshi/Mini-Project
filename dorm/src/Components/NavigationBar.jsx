import { Container, Nav, Navbar } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export function NavigationBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" >DORM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
              <Nav.Link >Home</Nav.Link>
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


            <LinkContainer to={"/about"}>
              <Nav.Link  style={{ margin: '0 40px' }}>About </Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/signin"}>
              <Nav.Link  style={{ margin: '0 10px' }}>SignIn</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/signUp"}>
              <Nav.Link  style={{ display: 'flex', justifyContent: 'flex-end' }}>SignUp </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
