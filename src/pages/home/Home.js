import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchAllPosts } from "../../features/post/postsAction";

import Hero from '../../components/homehero/Hero';
import RecentPostComp from "../../components/homerecentpag/RecentPostComp";
import Subscribe from "../../components/homesubscribe/Subscribe.Comp";

const Home = () => {
  const dispatch = useDispatch();

  const [str] = useState("");

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [str, dispatch]);


  return (
    <div className='Home'>
        <Hero  />
        <RecentPostComp />
        <Subscribe />
    </div>
  )
}

export default Home