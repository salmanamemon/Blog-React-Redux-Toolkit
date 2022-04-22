import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../features/post/postsAction";
import { Container, Row, Col } from "react-bootstrap";

import Hero from '../../components/homehero/Hero';
import RecentPosts from "../../components/homerecent/RecentPosts";
import RecentPostComp from "../../components/homerecentpag/RecentPostComp";

const Home = () => {
  const dispatch = useDispatch();

  const [str] = useState("");

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [str, dispatch]);


  return (
    <div className='Home'>
        <Hero  />

        {/* <Container className="recentPosts">
          <Row>
              <RecentPosts />
          </Row>
        </Container> */}

        <hr />
        <Container className="recentPosts">
          <Row>
              <RecentPostComp itemsPerPage={3} />
          </Row>
        </Container>
    </div>
  )
}

export default Home