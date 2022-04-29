import React from 'react';
import { useSelector } from "react-redux";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Posts from "./pages/post/Posts";
import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Blogs from './pages/blogs/Blogs';
import Profile from './components/profile/Profile.comp';
import AdminPosts from './pages/postadmin/AdminPosts';
import AddPostForm from './components/add-post-form/AddPostForm.comp';

function App() {
  const { isAuth } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/post/:tId" element={<Posts />} />
          { 
            isAuth ? 
              user.role === '0' ?
                <Route exact path="/dashboard" element={<Dashboard />} />
                : 
                '' 
              : 
            ''
          }
          { 
            isAuth ? 
              user.role === '0' ?
                <Route exact path="/add-post" element={<AddPostForm />} />
                : 
                '' 
              : 
            ''
          }
          { 
            isAuth ? 
              user.role === '0' ?
                <Route exact path="/adminpost/:tId" element={<AdminPosts />} />
                : 
                '' 
              : 
            ''
          }
          { isAuth ? <Route exact path="/profile" element={<Profile />} /> : ""  }
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
