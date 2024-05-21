import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import './Styles/footer.css';
import { LinkContainer } from "react-router-bootstrap";
import { ABOUT_US } from "../constants/AppRoute";

const Footer = () => {
  return (
    <footer className="bg-secondary " style={{ height: "200px" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h4>Address:</h4>
            <h5>Main Office</h5>
        <p>Dorm Discover's
        123 Business Street, Suite 456</p>
        <p>Baramati, Maharastra, 413102
        INDIA
        Contact Number: +1 (123) 456-7890</p>
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
                <LinkContainer to={ABOUT_US}>
                  <Nav.Link>AboutUs </Nav.Link>
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
