

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";

export function Home(){
    return (
        <Container>
            <Header title="Your Stay. Your Way.." description="" style= "width=100%" />
            
            <Form inline>
              <Row>
                <Col lg={4}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2 "
                    
                    style={{ width: '380px', height: '40px' ,marginLeft: '80px'}}
                  />
                </Col>
                <Col lg={4}>
                  <Button type="submit" style={{ width: '70px', height: '40px'}} >Submit</Button>
                </Col>
              </Row>
            </Form>

            <Row>
                <Col lg={4}></Col>
                <Col lg={4}></Col>
            </Row>


        </Container>
    )
}