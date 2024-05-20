import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Styles/dormsearch.css';
// Import the JSON data
import countries from './Jsonfile/country.json';
import states from './Jsonfile/state.json';
import cities from './Jsonfile/city.json';

export function DormSearch() {
  // State hooks for each dropdown
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  
  const [showCards, setShowCards] = useState(false);
  
  // Effect hook to filter states based on selected country
  useEffect(() => {
    const filteredStates = states.filter(state => state.country_id === selectedCountry);
    setFilteredStates(filteredStates);
    setSelectedState(''); // Reset state selection when country changes
  }, [selectedCountry]);

  // Effect hook to filter cities based on selected state
  useEffect(() => {
    const filteredCities = cities.filter(city => city.state_id === selectedState);
    setFilteredCities(filteredCities);
  }, [selectedState]);

  // Handlers for dropdown changes
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const cardsData = [
    { title: "Card 1", content: "Content for card 1" },
    { title: "Card 2", content: "Content for card 2" },
    { title: "Card 3", content: "Content for card 3" },
    // ... more cards
  ];

  // Card component
  const CardComponent = ({ title, content }) => (
    <Col xs={12} md={4}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
      </div>
    </Col>
  );

  return (
    <>
      <Container fluid className="search-container">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <h2>Search for Dorms</h2>
            <Form>
              {/* Location Filters */}
              <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" value={selectedCountry} onChange={handleCountryChange}>
                  <option value="">Select country</option>
                  {countries.map(country => (
                    <option key={country.country_id} value={country.country_id}>{country.country_name}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" value={selectedState} onChange={handleStateChange}>
                  <option value="">Select state</option>
                  {filteredStates.map(state => (
                    <option key={state.state_id} value={state.state_id}>{state.state_name}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control as="select">
                  <option value="">Select city</option>
                  {filteredCities.map(city => (
                    <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="joiningDate">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="priceRange">
                <Form.Label>Price Range</Form.Label>
                <Form.Control type="text" placeholder="Enter price range" />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={(event) => {
                event.preventDefault();
                setShowCards(true);
              }}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      
      {showCards && (
        <Container className="cards-container">
          <Row>
            {cardsData.map((card, index) => (
              <CardComponent key={index} title={card.title} content={card.content} />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}