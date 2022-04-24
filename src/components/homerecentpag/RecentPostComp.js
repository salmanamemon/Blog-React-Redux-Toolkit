import React, { useState } from 'react';
import { useSelector } from "react-redux";

import { Image, Col, Row, Container } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import './RecentPostComp.css';

const PER_PAGE = 6;

const PaginatedItems = ({ itemsPerPage }) => {
  // We start with an empty list of items.
  const {searchPostList, isLoading, error} = useSelector((state)=>state.posts);
  const [currentPage, setCurrentPage] = useState(0);
  const items = searchPostList;
  //console.log(items);

  // Invoke when user click to request another page.
  function handlePageClick({selected: selectedPage}) {
    // console.log("selected", selectedPage);
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = items
  .slice(offset, offset + PER_PAGE)
  .map((row, index) => 
    <Col className="mb-5" md={4} key={index} >
      <div className='postInner'>
        <Image src={`./uploads/${row.image}`} alt="Mini blog"  fluid />
            <b style={{backgroundColor: row.catColor}} className="postCategory">{row.catName}</b>
            <div className="post-meta align-items-center text-left justify-content-between postMeta clearfix">
              <span className="d-inline-block mt-1">By: {row.name}</span> <span className="d-inline-block mt-1">- {new Date(row.addedAt).toLocaleDateString()}</span>
            </div>
            <h3>{row.title}</h3>
            <p className="postText">{row.text.substring(0, 110)}...</p>
            <Link className="postAnchor" to={`/post/${row.id}`}>Read More</Link>
      </div>
    </Col>
  );
  // console.log("currentPageData", currentPageData);

  const pageCount = Math.ceil(items.length / PER_PAGE);
  // console.log(pageCount);
  if(isLoading) return <h3>Loading ...</h3>;
  if(error) return <h3>{error}</h3>

  return (
    <section className="recentPosts">
      <Container>
          <Row className='mb-5'>
            <h2>Recent Blogs</h2>
          </Row>
          <Row>{currentPageData}</Row>
      </Container>
      <Container>
        <hr />
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
      </Container>
    </section>
  );
}

export default PaginatedItems