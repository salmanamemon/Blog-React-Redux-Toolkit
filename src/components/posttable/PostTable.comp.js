// export default PostTable
import React, { useState } from 'react';
import { useSelector } from "react-redux";

import { Table } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

const PER_PAGE = 6;

const PostTable = () => {
  // We start with an empty list of items.
  const {searchPostList, isLoading, error} = useSelector((state)=>state.posts);
  
  
  const [currentPage, setCurrentPage] = useState(0);
  const items = searchPostList;
  console.log(items);

  // Invoke when user click to request another page.
  function handlePageClick({selected: selectedPage}) {
    // console.log("selected", selectedPage);
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = items.length ? 
  items
  .slice(offset, offset + PER_PAGE)
  .map((row, index) => 
        <tr key={row.p_id}>
          <td>{index + 1}</td>
          <td>
           <Link to={`/adminpost/${row.id}`}>{row.title}</Link>
          </td>
          <td>{row.status}</td>
          <td>{row.addedAt}</td>
        </tr>
  ) : 
  <tr>
    <td colSpan="4" className="text-center">
      No Post show{" "}
    </td>
  </tr>;
  // console.log("currentPageData", currentPageData);

  const pageCount = Math.ceil(items.length / PER_PAGE);
  // console.log(pageCount);
 
  if(isLoading) return <h3>Loading ...</h3>;
  if(error) return <h3>{error}</h3>

  return (
    <>
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
           {currentPageData}
         </tbody>
       </Table>
        <ReactPaginate
          breakLabel="..."
          previousLabel="<"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          containerClassName={"pagination justify-content-center"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          renderOnZeroPageCount={null}
        /> 
    </>
  );
}

export default PostTable