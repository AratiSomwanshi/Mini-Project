import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import dormData from './Jsonfile/dormData.json';
import './Styles/dormBooking.css';

// Dorm component
const Dorm = ({ dorm, onDormSelect }) => {
  return (
    <Col sm={6} md={6} lg={4}>
      <div className="dorm" onClick={() => onDormSelect(dorm.id)}>
        <h3>{dorm.name}</h3>
        <img src={dorm.image} alt={dorm.name} className="dorm-image" />
        <p>Price: ${dorm.price}</p>
      </div>
    </Col>
  );
};

// App component
const App = () => {
  const [selectedDormId, setSelectedDormId] = useState(null);

  const handleDormSelect = (dormId) => {
    setSelectedDormId(dormId);
  };
 
  const handleBookingConfirm = () => {
    // Logic to confirm booking
  };

  return (
    <div className="app">
      <Container className="dorm-list">
        <h2>Available Dorms</h2>
        <Row>
          {dormData.map(dorm => (
            <Dorm key={dorm.id} dorm={dorm} onDormSelect={handleDormSelect} />
          ))}
        </Row>
      </Container>
      
      {selectedDormId && (
        <Container className="booking-form">
          <h2>bokking</h2>
          <Row>
            <Col lg={4}>
              <p>Selected Dorm: {dormData.find(dorm => dorm.id === selectedDormId).name}</p>
              <p>Price: {dormData.find(dorm => dorm.id === selectedDormId).price}</p>
              
              <p>Price: {dormData.find(dorm => dorm.id === selectedDormId).city}</p>
              {/* Add additional form fields for booking details */}
              <Button onClick={handleBookingConfirm}>Confirm Booking</Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};
export default App;  