import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
const bgimage = "../../uploads/blogimage.jpg";

const About = () => {
  return (
    <div className="siteSinglePage">
        <div className="bannerFull bannerInnerPages" style={{
          backgroundImage: `url(../../uploads/${bgimage})`
        }} >
          <Container>
            <div className="overlay"></div>
            <Row>
              <Col md={12}>
                <div className="bannerFullInner">
                  <h1>About</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      <Container>
        <Row>
          <Col className="text-weight-bolder text-secondary">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, elit ac finibus condimentum, lacus velit molestie lorem, ac molestie sem tortor non nibh. Fusce ligula risus, malesuada sed odio eget, fringilla laoreet lacus. Curabitur diam neque, dignissim ac felis vel, iaculis placerat turpis. Sed rutrum felis eu sem molestie dignissim. Donec consectetur ligula ut sagittis imperdiet. Phasellus eu rhoncus velit. Nam dignissim, diam in mollis congue, libero massa blandit massa, in posuere justo neque sit amet dui. Vestibulum lacus nisi, blandit quis quam quis, elementum dignissim nibh. Donec placerat, nunc consequat auctor aliquet, nibh ipsum malesuada ex, a malesuada eros dolor quis augue. In non placerat ex. Ut mattis faucibus imperdiet. Suspendisse potenti. In non malesuada turpis, eu pellentesque eros. Pellentesque id faucibus risus, facilisis pellentesque urna.</p>

            <p>Maecenas dictum eleifend felis, id maximus turpis lacinia at. Sed fermentum accumsan justo aliquet lobortis. Etiam est massa, porttitor non odio a, posuere euismod mi. Cras ut aliquet est. Proin sodales molestie cursus. Mauris a feugiat felis. Integer vitae suscipit enim. Sed fermentum bibendum ipsum, congue posuere nunc vehicula vel.</p>

            <p>Phasellus tristique est eget aliquam vehicula. Curabitur tristique, felis eget commodo suscipit, lorem diam commodo nisi, id sodales justo diam et est. Aliquam sit amet porttitor ipsum, in porttitor quam. Aliquam id ornare ex. Suspendisse tristique metus finibus est auctor lacinia. Quisque pretium molestie pretium. Sed in fringilla turpis, sed elementum dolor. Praesent vitae velit vel erat finibus placerat. Sed mattis nunc id mi consectetur consequat. Nam euismod mattis tellus, et bibendum tortor ultricies eu. Curabitur cursus quam et dolor mattis mollis. Curabitur hendrerit ex et purus facilisis, a congue neque volutpat. Integer cursus nisi vel felis pharetra mattis rhoncus sed nulla. Phasellus eget dui semper magna iaculis convallis. In hac habitasse platea dictumst. Aenean feugiat tincidunt luctus.</p>

            <p>Nullam eget aliquam justo, at tempor dui. Proin sed facilisis enim. Maecenas quis tincidunt velit, at fringilla risus. Vestibulum suscipit tristique leo id rhoncus. Sed mi turpis, malesuada a augue in, accumsan tincidunt purus. Ut placerat nunc sit amet orci sagittis pellentesque. Integer semper dictum eros at ornare. Praesent mattis leo lacus, sed consequat lectus bibendum non. Fusce massa nisl, tempus id vestibulum id, ullamcorper vitae arcu. Integer at erat at urna lobortis bibendum.</p>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default About