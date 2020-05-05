import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing/index.js';

import PostFormContainer from '../../containers/PostFormContainer/index.js'


const App = () => {
  return (
    <div className="container">
    <Router>
      <Navbar/>
    
      {/* <PostFormContainer /> */}

      <Route exact path="/" component={Landing} />
      <Route exact path="/post" component={PostFormContainer} />
      
    </Router>
    </div>

  )

};
export default App;