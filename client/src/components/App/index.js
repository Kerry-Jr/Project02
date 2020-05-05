import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing/index.js';

import Pokedex from '../../containers/Pokedex'
import PostFormContainer from '../../containers/PostFormContainer/index.js'



import ViewPosts from './../ViewPosts/ViewPosts'



const App = () => {
  return (
    <div className="container">
    <Router>
      <Navbar/>
    
      {/* <PostFormContainer /> */}

      <Route exact path="/" component={Landing} />
      <Route exact path="/post" component={PostFormContainer} />

      <Route exact path='/pokedex' component={Pokedex}/>

      <Route exact path="/view" component={ViewPosts} />
      

    </Router>
    </div>

  )

};
export default App;