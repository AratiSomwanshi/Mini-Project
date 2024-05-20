import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './Styles/aboutUs.css';

const Feedback = () => {
  return (
    <div className="aboutus">
    <Container>
      <Row>
        <Col className='heading' >  <h1>FEEDBACK</h1>   </Col>
      </Row>
    
      <Row className="justify-content-center">
      

 <Col md={4}>
<Card className="message">
  <Card.Body>
  <Image src="/images/vision.jpg" alt="Vision" fluid />
    <Card.Title>Important Message</Card.Title>
    <Card.Text>
      We value your feedback! If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us. Your input helps us improve our platform and provide a better experience for all our users.
    </Card.Text>
    <Card.Link href="#">Contact Us</Card.Link>
  </Card.Body>
</Card>
</Col> 

    
      

 <Col md={4}>
<Card className="message">
  <Card.Body>
  <Image src="/images/vision.jpg" alt="Vision" fluid />
    <Card.Title>Important Message</Card.Title>
    <Card.Text>
      We value your feedback! If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us. Your input helps us improve our platform and provide a better experience for all our users.
    </Card.Text>
    <Card.Link href="#">Contact Us</Card.Link>
  </Card.Body>
</Card>
</Col> 

      </Row>
      <Row className="justify-content-center">
    

 <Col md={4}>
<Card className="message">
  <Card.Body>
  <Image src="/images/vision.jpg" alt="Vision" fluid />
    <Card.Title>Important Message</Card.Title>
    <Card.Text>
      We value your feedback! If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us. Your input helps us improve our platform and provide a better experience for all our users.
    </Card.Text>
    <Card.Link href="#">Contact Us</Card.Link>
  </Card.Body>
</Card>
</Col> 

      </Row>
        {/* <Row className="justify-content-center">
          <Col md={4}>
            <Image src="data:image/jpeg;base64,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" alt="Mission" fluid />
          </Col>
          <Col md={4}>
            <Image src="/images/vision.jpg" alt="Vision" fluid />
          </Col>
        </Row> */}

<Row>
        <Col className='team' >  <h1>Popular destinations  India</h1>   </Col>
      </Row>
      
      <Row className="justify-content-center">
         

 <Col md={4}>
<Card className="message">
  <Card.Body>
  <Image src="/images/vision.jpg" alt="Vision" fluid />
    <Card.Title>Important Message</Card.Title>
    <Card.Text>
      We value your feedback! If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us. Your input helps us improve our platform and provide a better experience for all our users.
    </Card.Text>
    <Card.Link href="#">Contact Us</Card.Link>
  </Card.Body>
</Card>
</Col> 

      

 <Col md={4}>
<Card className="message">
  <Card.Body>
  <Image src="/images/vision.jpg" alt="Vision" fluid />
    <Card.Title>Important Message</Card.Title>
    <Card.Text>
      We value your feedback! If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us. Your input helps us improve our platform and provide a better experience for all our users.
    </Card.Text>
    <Card.Link href="#">Contact Us</Card.Link>
  </Card.Body>
</Card>
</Col> 

          

 <Col md={4}>
<Card className="message">
  <Card.Body>
  <Image src="/images/vision.jpg" alt="Vision" fluid />
    <Card.Title>Important Message</Card.Title>
    <Card.Text>
      We value your feedback! If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us. Your input helps us improve our platform and provide a better experience for all our users.
    </Card.Text>
    <Card.Link href="#">Contact Us</Card.Link>
  </Card.Body>
</Card>
</Col> 

        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;






 <Col md={4}>
<Card className="message">
  <Card.Body>
  <Image src="/images/vision.jpg" alt="Vision" fluid />
    <Card.Title>Important Message</Card.Title>
    <Card.Text>
      We value your feedback! If you have any questions, suggestions, or concerns, please don't hesitate to reach out to us. Your input helps us improve our platform and provide a better experience for all our users.
    </Card.Text>
    <Card.Link href="#">Contact Us</Card.Link>
  </Card.Body>
</Card>
</Col> 
