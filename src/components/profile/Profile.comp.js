import React from "react";

import { useSelector } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Profile = () => {

  // useNavigate is the new version of useHistory
  const { user } = useSelector((state) => state.user);

  return (
      <div className="mt-3 add-new-ticket bg-light p-5">
        <h1 className="text-info text-center">My Profile</h1>
        <Container>
          <Row className="mt-4">
            <Col className="m-auto" md={6}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Text>
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Phone:</b> {user.phone}</p>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Company Name:</b> {user.company}</p>
                            <p><b>Address:</b> {user.address}</p>
                        </Card.Text>
                        <Link variant="primary" to="../Blogs"> Go To Blogs</Link>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Profile