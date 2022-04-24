import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../features/post/postsAction";

import RecentPostComp from "../../components/homerecentpag/RecentPostComp";
import { Col, Container, Row } from "react-bootstrap";

import './Blogs.css';
const bgimage = "../../uploads/blogimage.jpg";


const Blogs = () => {
  const dispatch = useDispatch();

  const [str] = useState("");

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [str, dispatch]);


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
                  <h1>Blogs</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <RecentPostComp />
    </div>
  )
}

export default Blogs