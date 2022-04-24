import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Button, Spinner, Alert } from "react-bootstrap";
// import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
// import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../../features/post/postsAction";
//import { fetchSinglePost, closeTicket } from "../../features/post/postsAction";
//import { resetResponseMsg } from "../ticket-list/ticketsSlice";
import './Posts.css';

// const ticket = tickets[0];
const Posts = () => {

  const { tId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedPost, replyMsg, replyTicketError } = useSelector((state)=>state.posts);
  const catArray = selectedPost.category;

  //console.log('TID'+tId);

  useEffect(() => {

    dispatch(fetchSinglePost(tId))

    // return () => {
    //   (replyMsg || replyPostError) && dispatch(resetResponseMsg())
    // }
  },[tId, dispatch]);
  //, [tId, replyMsg, replyPostError, dispatch]);

  return (
    <>
    <Container className="bannerFull p-0" fluid style={{
      backgroundImage: `url(../uploads/${selectedPost.image})`
    }}>
      <Row>
        <Col md={12}>
          {/* <b style={{backgroundColor: selectedPost.category.catColor}} className="postCategory">{selectedPost.category.catName}</b> */}
          {JSON.stringify(catArray)}
          
          {/* {catArray.map((row) => 
            <p>[{row}] {row.id}</p>
          )} */}
          <h1>{selectedPost.title}</h1>
          {/* <div className="post-meta align-items-center text-left justify-content-between postMeta clearfix">
            <span className="d-inline-block mt-1">By: {selectedPost.author.name}</span> <span className="d-inline-block mt-1">- {new Date(selectedPost.addedAt).toLocaleDateString()}</span>
          </div> */}
        </Col>
      </Row>
    </Container>
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
          
          {/* <span>{selectedPost.catName}</span> */}
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
      {/* <Row className="mt-4">
        <Col>{selectedTicket.conversations && <MessageHistory msg={selectedTicket.conversations} />}</Col>
      </Row> */}
      <hr />

      <Row className="mt-4">
        <Col>
          {/* <UpdateTicket id={tId}/> */}
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Posts;