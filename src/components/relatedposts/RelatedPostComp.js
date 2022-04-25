import React, { useState } from 'react';
import { useSelector } from "react-redux";

import { Image, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './RelatedPostComp.css';

const RelatedPosts = () => {
  // We start with an empty list of items.
  const {relatedPost, isLoading, error} = useSelector((state)=>state.posts);
  if(isLoading) return <h3>Loading ...</h3>;
  if(error) return <h3>{error}</h3>

  return (
    <section className="recentPosts">
      <Container>
          <Row className='mb-5'>
            <h2>Releated Blogs</h2>
          </Row>
          <Row>
            {
              relatedPost.length ? (
                relatedPost.slice(0,3).map((row) => (
                  
                  <Col className="mb-5" md={4} key={row.p_id} >
                    <div className='postInner'>
                      <Image src={`../uploads/${row.image}`} alt="Mini blog"  fluid />
                          <b style={{backgroundColor: row.catColor}} className="postCategory">{row.catName}</b>
                          <div class="post-meta align-items-center text-left justify-content-between postMeta clearfix">
                            <span className="d-inline-block mt-1">By: {row.name}</span> <span className="d-inline-block mt-1">- {new Date(row.addedAt).toLocaleDateString()}</span>
                          </div>
                          <h3>{row.title}</h3>
                          <p className="postText">{row.text.substring(0, 110)}...</p>
                          <Link className="postAnchor" to={`/post/${row.p_id}`}>Read More</Link>
                    </div>
                  </Col>
                  
                ))
              ) : (
                    <li>
                      <div className="text-center">
                        No post show{" "}
                      </div>
                    </li>
              )
            }
          </Row>
      </Container>
    </section>
    
  );
}

export default RelatedPosts