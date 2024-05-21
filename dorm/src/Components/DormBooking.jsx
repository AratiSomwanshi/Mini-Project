import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import dormData from './Jsonfile/dormData.json';
import './Styles/dormBooking.css';

const Dorm = ({ dorm, onDormSelect }) => {
  return (
    <Col sm={6} md={6} lg={4}>
      <div className="dorm" onClick={() => onDormSelect(dorm.id)}>
        <h3>{dorm.name}</h3>
        <img src={dorm.image} alt={dorm.name} className="dormimage" />
        <p>Price: {dorm.price}</p>
      </div>
    </Col>
  );
};

const App = () => {
  const [selectedDormId, setSelectedDormId] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleDormSelect = (dormId) => {
    setSelectedDormId(dormId);
    setBookingConfirmed(false); 
  };

  const handleBookingConfirm = () => {
 
    alert('Booking confirmed! Enjoy your stay.' );
    setBookingConfirmed(true); 
  };

  return (
    <div className="app">
      <Container className="dormlist">
        <h2>Available Dorms</h2>
        <Row>
          {dormData.map((dorm) => (
            <Dorm key={dorm.id} dorm={dorm} onDormSelect={handleDormSelect} />
          ))}
        </Row>
      </Container>

      {selectedDormId && !bookingConfirmed && (
        <Container className="bookingform">
          <h2>Booking</h2>
          <Row>
            <Col lg={4} className='text'>
              <p>Selected Dorm: {dormData.find((dorm) => dorm.id === selectedDormId).name}</p>
              <p>Price: {dormData.find((dorm) => dorm.id === selectedDormId).price}</p>
              <p>City: {dormData.find((dorm) => dorm.id === selectedDormId).city}</p>
              <Button onClick={handleBookingConfirm}>Confirm Booking</Button>
            </Col>
          </Row>
        </Container>
      )}

      {bookingConfirmed && (
        <Container className="confirmationmessage">
          <p>Booking confirmed! Enjoy your stay.</p>
        </Container>
      )}
    </div>
  );
};

export default App;
