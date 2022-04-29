import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { AddCommentOnPost } from "../../features/post/postsAction";

export const AddPostComment = ({id}) => {
  const dispatch =  useDispatch();
  const { user } = useSelector(state => state.user)
  const [comment, setComment] = useState('')

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const msgObj = {
      comment,
      sender: user.name,
    }
    dispatch(AddCommentOnPost(id, msgObj));
    setComment("");
    //alert(message);
  };

  return (
    <>
      
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Comment:  </Form.Label>
        <Form.Text>  Please reply your message here or update the ticket</Form.Text>
        <Form.Control
          value={comment}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <div className="text-right mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </>
  );
};

AddPostComment.propTypes = {
  id: PropTypes.string.isRequired,
};