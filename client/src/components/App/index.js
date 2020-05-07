import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing/index.js';
import './../../components/Landing/style.css'
import Pokedex from '../../containers/Pokedex'
import PostFormContainer from '../../containers/PostFormContainer/index.js'

// import EditPost from '../EditPost'
import EditPostModal from '../EditPostToggle'
import ViewPosts from '../../containers/ViewPosts/ViewPosts'



const App = () => {
  return (
    <div className="container-fluid">
    <Router>
      <Navbar />
    
      {/* <PostFormContainer /> */}

      <Route exact path="/" component={Landing} />
      <Route exact path="/post" component={PostFormContainer} />
      <Route exact path="/edit/:blogId" component={EditPostModal}/>

      <Route exact path='/pokedex' component={Pokedex}/>

      <Route exact path="/view" component={ViewPosts} />
      {/* <Route exact path="/edit/:blogId" component={EditPost}/> */}

    </Router>
    </div>

  )

};
export default App;