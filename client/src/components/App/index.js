import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogForm from '../../containers/BlogForm';
import BlogCard from '../../containers/BlogCard';
import Navbar from '../Navbar';
import Landing from '../Landing/index.js';
import PostForm from '../PostForm/';
import PostFormContainer from '../../containers/PostFormContainer/index.js'


const App = () => {
  return (
    <div className="container">
    <Router>
      <Navbar/>
      <Route exact path='/' component={BlogForm}/>
      <Route exact path='/blogs' component={BlogForm}/>
      <Route exact path='/blogs/:blogId' component={BlogCard}/>
    </Router>
    </div>

  )

};
export default App;
       


{/* <Route exact path='/' component={TodoForm}/>
        {/* <Route exact path='/counter' component={Counter}/> */}
        {/* <Route exact path='/todos' component={TodoForm}/>
        // <Route exact path='/todos/:todoId' component={TodoCard}/> */} 