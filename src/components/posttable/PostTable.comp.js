import React from "react";

import { useSelector } from "react-redux";

import { Table } from "react-bootstrap";

import { Link } from "react-router-dom";

const PostTable = () => {

  const {searchPostList, isLoading, error} = useSelector((state)=>state.posts);
  if(isLoading) return <h3>Loading ...</h3>;
  if(error) return <h3>{error}</h3>

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Status</th>
          <th>Added Date</th>
        </tr>
      </thead>
      <tbody>
        {searchPostList.length ? (
          searchPostList.map((row, index) => (
            <tr key={row.p_id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/post/${row.id}`}>{row.title}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Post show{" "}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default PostTable