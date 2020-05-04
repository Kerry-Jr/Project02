import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogForm from '../../containers/BlogForm';
import BlogCard from '../../containers/BlogCard';
import Navbar from '../Navbar';
import Basic from './../Basic/Basic.js';
import PostForm from '../PostForm/';
import PostFormContainer from '../../containers/PostFormContainer/index.js'


const App = () => {
  return (

    <Router>
      <Navbar/>
      <Route exact path='/' component={BlogForm}/>
      <Route exact path='/blogs' component={BlogForm}/>
      <Route exact path='/blogs/:blogId' component={BlogCard}/>
    </Router>

  )

};
export default App;
