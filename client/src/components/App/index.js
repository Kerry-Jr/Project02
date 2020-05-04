import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogForm from '../../containers/BlogForm';
import BlogCard from '../../containers/BlogCard';
import Navbar from '../Navbar';

const App = () => (
    <Router>
      <Navbar/>
      <Route exact path='/' component={BlogForm}/>
      <Route exact path='/blogs' component={BlogForm}/>
      <Route exact path='/blogs/:blogId' component={BlogCard}/>
    </Router>
);
export default App;
