import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Image, Col } from "react-bootstrap";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";


//const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


function Items({ currentItems }) {
  const {searchPostList, isLoading, error} = useSelector((state)=>state.posts);
  return (
    <>
      {searchPostList.map((row) => (
          <Col key={row.id}>
              <Image src={`./uploads/${row.image}`} alt="Mini blog"  fluid />
              <div className="heroBannerInner">
                  <div>
                  <span>{row.catName}</span>
                  <h2><Link to={`/post/${row.id}`}>{row.title}</Link></h2>
                  <span>{row.addedAt}</span>
                  <p>{row.status}</p>
                  </div>
              </div>
          </Col>
      ))}
    </>
  );
}

const PaginatedItems = ({ itemsPerPage }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems