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

function App() {
  const { isAuth } = useSelector((state) => state.login);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Posts />} />
          { isAuth ? <Route exact path="/dashboard" element={<Dashboard />} /> : ""  }
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
