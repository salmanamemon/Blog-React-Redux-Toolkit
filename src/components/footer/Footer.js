import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from "react-router-dom";
import './Footer.css';
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, MailFilled  } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer class="site-footer">
      <Container>
        <Row>
          <Col md={4}>
            <h3 className="footer-heading mb-4 mr-2">About Us</h3>
            <p className="mr-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
          </Col>
          <Col md={3}>
            <Nav>
              <ul className="list-unstyled">
                <li>
                  <LinkContainer to="/">
                      <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                </li>
                <li>
                  <LinkContainer to="About">
                      <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                </li>
                <li>
                  <LinkContainer to="Posts">
                      <Nav.Link>Blogs</Nav.Link>
                  </LinkContainer>
                </li>
                <li>
                  <LinkContainer to="Contact">
                      <Nav.Link>Contact</Nav.Link>
                  </LinkContainer>
                </li>
              </ul>
            </Nav>
          </Col>
          <Col md={4}>
            <div>
              <h3 className="footer-heading mb-4">Connect With Us</h3>
              <p>
                <Link to="#"><FacebookFilled className="p-2"/></Link>
                <Link to="#"><TwitterSquareFilled className="p-2" /></Link>
                <Link to="#"><InstagramFilled className="p-2" /></Link>
                <Link to="#"><MailFilled className="p-2" /></Link>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" md={12} >
            <p>
            
            Copyright © <script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made with &hearts; by <a href="https://salmanaziz.tech" target="_blank">SalmanAziz</a>
            
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
