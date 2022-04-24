import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Button, Spinner, Alert } from "react-bootstrap";
import { CommentHistory } from "../../components/commenthistory/CommentHistory";
// import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";
import { fetchSinglePost, fetchRelatedPost } from "../../features/post/postsAction";
//import { fetchSinglePost, closeTicket } from "../../features/post/postsAction";
//import { resetResponseMsg } from "../ticket-list/ticketsSlice";
import './Posts.css';
import RelatedPosts from "../../components/relatedposts/RelatedPostComp";

// const ticket = tickets[0];
const Posts = () => {

  const { tId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedPost, relatedPost, replyMsg, replyTicketError } = useSelector((state)=>state.posts);
  const catArray = selectedPost.category;

  //console.log('TID'+tId);

  useEffect(() => {

    dispatch(fetchSinglePost(tId))
    dispatch(fetchRelatedPost(tId))

    // return () => {
    //   (replyMsg || replyPostError) && dispatch(resetResponseMsg())
    // }
  },[tId, dispatch]);
  //, [tId, replyMsg, replyPostError, dispatch]);

  return (
    <div className="siteSinglePage">
        <div className="bannerFull" style={{
          backgroundImage: `url(../uploads/${selectedPost.image})`
        }} >
          <Container>
            <div className="overlay"></div>
            <Row>
              <Col md={12}>
                <div className="bannerFullInner">
                  {/*  */}
                  {/* {JSON.stringify(selectedPost.category)} */}
                  
                  {selectedPost.category && selectedPost.category.map(cat => 
                    <b style={{backgroundColor: cat.catColor}} className="postCategory">{cat.catName}</b>
                  )}
                  <h1>{selectedPost.title}</h1>
                  <div className="post-meta align-items-center text-left justify-content-between postMeta clearfix">
                    {selectedPost.author && selectedPost.author.map(aut => 
                      <span className="d-inline-block mt-1">By: {aut.name}</span>
                    )}
                    <span className="d-inline-block mt-1">- {new Date(selectedPost.addedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <Row>
          <Col>
            {isLoading && <Spinner variant="primary" animation="border" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {replyPostError && <Alert variant="danger">{replyPostError}</Alert>}
            {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
          </Col>
        </Row> */}
      <Container>
        <Row>
          <Col className="text-weight-bolder text-secondary">
            <p>{selectedPost.text}</p>
          </Col>
          {/* <Col className="text-right">
            <Button 
              variant="outline-info" 
              onClick={() => dispatch(closeTicket(tId))}
              disabled={selectedTicket.status === "closed"}
            >Close Ticket</Button>
          </Col> */}
        </Row>
        <Row className="mt-4">
          <Col>{selectedPost.comments && <CommentHistory msg={selectedPost.comments} />}</Col>
        </Row>
        <hr />

        <Row className="mt-4">
          <Col>
            {/* <UpdateTicket id={tId}/> */}
          </Col>
        </Row>
        
        <RelatedPosts />
      </Container>
    </div>
  );
};

export default Posts;