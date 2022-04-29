import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { CommentHistory } from "../../components/commenthistory/CommentHistory";
import { AddPostComment } from "../../components/addpostcomment/AddPostComment";
import { useParams } from "react-router-dom";
import { fetchSinglePost, fetchRelatedPost } from "../../features/post/postsAction";
import { resetResponseMsg } from "../../features/post/postsSlice";
import './Posts.css';
import RelatedPosts from "../../components/relatedposts/RelatedPostComp";

// const ticket = tickets[0];
const Posts = () => {

  const { tId } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, selectedPost, replyMsg, replyPostError } = useSelector((state)=>state.posts);
 // const catArray = selectedPost.category;
  // const bgimage = "../../uploads/blogimage.jpg";

  //console.log('TID'+tId);

  useEffect(() => {

    dispatch(fetchSinglePost(tId))
    dispatch(fetchRelatedPost(tId))
    return () => {
      //(replyMsg ) && dispatch(resetResponseMsg())
      (replyMsg || replyPostError) && dispatch(resetResponseMsg())
    }
  }, [tId, replyMsg, replyPostError, dispatch]);

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
              className="text-capitalize"
              variant="outline-info" 
              onClick={() => dispatch(closePost(tId))}
              //disabled={selectedPost.status === "unpublished"}
            >Post {selectedPost.status === "published" ? "published" : 'unpublished'}
            </Button>
          </Col> */}
        </Row>
        <Row className="mt-4" md={12}>
          <Col>{selectedPost.comments && <CommentHistory msg={selectedPost.comments} />}</Col>
        </Row>
        <Row>
          <Col md={12}>
            {isLoading && <Spinner variant="primary" animation="border" />}
            {error && <Alert variant="danger">{error}</Alert>} 
            {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
            {replyPostError && <Alert variant="danger">{replyPostError}</Alert>}
          </Col>
        </Row>
        <hr />

        <Row className="mt-4">
          <Col>
            <AddPostComment id={tId}/>
          </Col>
        </Row>
        
        <RelatedPosts />
      </Container>
    </div>
  );
};

export default Posts;