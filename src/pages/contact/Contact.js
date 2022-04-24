import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../../components/contactform/ContactForm';

const bgimage = "../../uploads/blogimage.jpg";

const Contact = () => {
  return (
    <div className="siteSinglePage blogsPage">
        <div className="bannerFull bannerInnerPages" style={{
          backgroundImage: `url(../../uploads/${bgimage})`
        }} >
          <Container>
            <div className="overlay"></div>
            <Row>
              <Col md={12}>
                <div className="bannerFullInner">
                  <h1>Contact</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col md={5}>
              <div className='contactDetails'>
                  <h2>Send us message</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, elit ac finibus condimentum, lacus velit molestie lorem, ac molestie sem tortor non nibh. Fusce ligula risus, malesuada sed odio eget, fringilla laoreet lacus.</p>
              </div>
            </Col>
            <Col md={7}>
              <ContactForm />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className='mapIframe mt-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462562.65103013464!2d54.94728506410555!3d25.075759434670317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1650835076740!5m2!1sen!2sae" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Col>
          </Row>
        </Container> 
    </div>
  )
}

export default Contact