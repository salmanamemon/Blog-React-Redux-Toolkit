import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Button, Spinner, Alert } from "react-bootstrap";
// import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
// import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
import { useParams } from "react-router-dom";
import { fetchSinglePost } from "../../features/post/postsAction";
//import { fetchSinglePost, closeTicket } from "../../features/post/postsAction";
//import { resetResponseMsg } from "../ticket-list/ticketsSlice";

// const ticket = tickets[0];
const Posts = () => {

  const { tId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedPost, replyMsg, replyTicketError } = useSelector((state)=>state.posts);

  //console.log('TID'+tId);

  useEffect(() => {

    dispatch(fetchSinglePost(tId))

    // return () => {
    //   (replyMsg || replyPostError) && dispatch(resetResponseMsg())
    // }
  },[tId, dispatch]);
  //, [tId, replyMsg, replyPostError, dispatch]);

  return (
    <Container>
      {/* <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {replyPostError && <Alert variant="danger">{replyPostError}</Alert>}
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
        </Col>
      </Row> */}
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <Image src={`./uploads/${selectedPost.image}`} alt="Mini blog"  fluid />
          <span>{selectedPost.catName}</span>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.text}</p>
          <span>{selectedPost.addedAt}</span>
          <p>{selectedPost.status}</p>
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
  );
};

export default Posts;