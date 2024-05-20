import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./footer.css"
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary " style={{ height: "200px" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p></p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <LinkContainer to={"/"}>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={"/about"}>
                  <Nav.Link>About </Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={"/contact"}>
                  <Nav.Link>Contact </Nav.Link>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <LinkContainer to={"/facebook"}>
                  <Nav.Link>Facebook</Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={"/twitter"}>
                  <Nav.Link>Twitter </Nav.Link>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={"/instagram"}>
                  <Nav.Link>Instagram </Nav.Link>
                </LinkContainer>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; {new Date().getFullYear()} Your Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
