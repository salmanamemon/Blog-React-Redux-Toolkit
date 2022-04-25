import React from "react";

import { useDispatch } from "react-redux";
import { filterSearchPost } from "../../features/post/postsAction";

import { Form, Row, Col } from "react-bootstrap";

export const SearchForm = () => {

  const dispatch = useDispatch();

  const handleOnChange = (e) =>{
    const {value} = e.target;

    dispatch(filterSearchPost(value));
  }
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};