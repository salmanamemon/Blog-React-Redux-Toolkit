import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../features/post/postsAction";

import { Container, Row, Col, Button } from "react-bootstrap";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import PostTable from "../../components/posttable/PostTable.comp";
import { Link } from "react-router-dom";

const bgimage = "../../uploads/blogimage.jpg";

export const Dashboard = () => {

  const dispatch = useDispatch();

  const [str] = useState("");

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [str, dispatch]);

  return (
      <div className="mt-3 add-new-ticket bg-light p-5">
        <h1 className="text-info text-center">Dashboard</h1>
        <Container>
          <Row className="mt-4">
            <Col>
              <Link to="/add-ticket">
                <Button variant="info">Add New Ticket</Button>
              </Link>
            </Col>
            <Col className="text-right">
              <SearchForm  />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <PostTable />
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Dashboard