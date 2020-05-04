import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../../containers/Counter';
import TodoForm from '../../containers/TodoForm';
import TodoCard from '../../containers/TodoCard';
import Navbar from '../Navbar';
import Landing from '../Landing/index.js';
import PostForm from '../PostForm/';
import PostFormContainer from '../../containers/PostFormContainer/index.js'


const App = () => {
  return (
    <div className="container">
    <Router>

      <Navbar/>
 

      {/* <Landing /> */}

      <PostFormContainer />
    </Router>
    </div>

  )

};
export default App;
       


{/* <Route exact path='/' component={TodoForm}/>
        {/* <Route exact path='/counter' component={Counter}/> */}
        {/* <Route exact path='/todos' component={TodoForm}/>
        // <Route exact path='/todos/:todoId' component={TodoCard}/> */} 