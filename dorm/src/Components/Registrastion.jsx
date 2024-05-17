import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { Header } from "./Header";

import React, { useState } from 'react';

export function Registration(){



    const [formData,setFormData] =useState({name:'' , email: '' , phone:''});

    const handleFieldChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})//define function

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        console.log(formData);//cheaking form data

    }
    return(//return ui header components take two props we apply multiple prop provied
        <Container>
            <Header title="Welcome to User Regisration" description="This is form to add a user"/>
           <Container>
            <Form onSubmit={handleSubmit}>
            <Row>
               


                <Col lg={4}>
                <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleFieldChange} />
                            </Form.Group>


                </Col></Row>
<Row>
                <Col lg={4}>
                <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter Id" name="email" onChange={handleFieldChange} />
                            </Form.Group>
                </Col>


            </Row>


            <Row>
                <Col lg={4}>

                <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleFieldChange} />
                            </Form.Group>
                </Col>
                
            </Row>
            <Row>
            <Col lg={4}>
                    <Button type="submit" variant="primary" >register</Button>
               
                </Col>
            </Row>
               
            
            </Form>
           </Container>
        </Container>
    )
}