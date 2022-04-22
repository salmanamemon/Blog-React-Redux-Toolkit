import React from "react";
import { useSelector } from "react-redux";
import { Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './RecentPosts.css';

const RecentPosts = () => {

  const {searchPostList, isLoading, error} = useSelector((state)=>state.posts);

  if(isLoading) return <h3>Loading ...</h3>;
  if(error) return <h3>{error}</h3>

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
        <h2>Recent Posts</h2>
        <Slider {...settings}>
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
        </Slider>
    </>
  );
};

export default RecentPosts;