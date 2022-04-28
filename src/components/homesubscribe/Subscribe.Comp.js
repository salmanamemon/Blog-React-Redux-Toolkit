import React from 'react';
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import "./Subscribe.Comp.css";


const Subscribe = () => {
  return (
    <div className="site-section bg-light">
        <Container>
            <Row className="justify-content-center text-center">
                <Col md={5}>
                    <div className="subscribe-1 ">
                        <h2>Subscribe to our newsletter</h2>
                        <p className="mb-5" md={5}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt error illum a explicabo, ipsam nostrum.</p>
                        <Form autoComplete="off" >
                            <Form.Group className="d-flex">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                />
                                <Button type="submit">Subscribe</Button>
                            </Form.Group>
                            
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Subscribe