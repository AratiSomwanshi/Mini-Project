import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Styles/home.css';

import Footer from './Footer';
export function Home() {
  return (
    <>
      <div className="container">
        {/* First Row */}
        <Row className="mb-4">
          <Col xl={6}>
            <Card className="First">
              <Card.Body>
     
                <Card.Img variant="top" src="https://cdn6.agoda.net/images/WebCampaign/wcMM20230312/home_banner_web2/en-us.png" className="cardimage" />
                
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="First">
              <Card.Body >
           
                <Card.Img variant="top" src="https://cdn6.agoda.net/images/WebCampaign/wcCF20230101Dealspage/home_banner_web/en-us.png" className="cardimage" />
               
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="mb-4">
        <Col xl={3}>
  <Card className="Second">
    <Card.Body >
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.I1pi0NdlDGxVRXeIiBJm1gAAAA?w=238&h=180&c=7&r=0&o=5&pid=1.7" className="cardimage" />
      <Card.Text className="card-text">
        PUNE
      </Card.Text>
    </Card.Body>
  </Card>
</Col>


          <Col xl={3}>
            <Card className="Second">
              <Card.Body >
            
              
                <Card.Img variant="top" src="https://th.bing.com/th?q=Delhi+City+India&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" />
                <Card.Text>
                 DELHI
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3}>
            <Card className="Second">
              <Card.Body >
               
              
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.7j2iZyeTXeA0wpzzb8E_-AHaI3?w=163&h=195&c=7&r=0&o=5&pid=1.7" className="card-image" />
                <Card.Text>
                  MUMBAI
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3}>
            <Card className="Second">
              <Card.Body >
              
                <Card.Img variant="top" src="https://th.bing.com/th?q=Hyderabad+HD+Images&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" className="card-image" />
                <Card.Text>
                 HIDRABAD
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Third Row */}
        <Row>
          <Col xl={6}>
            <Card className="Third">
              <Card.Body >
                
                
                <Card.Img variant="top" src="https://cdn6.agoda.net/images/WebCampaign/wcBE20231001/home_banner_web/en-us.png" className="cardimage" />
                
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6}>
  <Card className="Third">
    <Card.Body >
      <Card.Img variant="top" src="https://cdn6.agoda.net/images/WebCampaign/wcMM20230312/home_banner_web2/en-us.png" className="cardimage" />
    </Card.Body>
  </Card>
</Col>

        </Row>

       
    
      </div>
      
      <Footer/>
      </>
  );
} 
