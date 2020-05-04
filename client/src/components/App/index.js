import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../../containers/Counter';
import TodoForm from '../../containers/TodoForm';
import TodoCard from '../../containers/TodoCard';
import Navbar from '../Navbar';
import Basic from './../Basic/Basic.js';


const App = () => {
    return(

      <Router>
        {/* <Navbar/>
        <Route exact path='/' component={TodoForm}/>
        <Route exact path='/counter' component={Counter}/>
        <Route exact path='/todos' component={TodoForm}/>
        <Route exact path='/todos/:todoId' component={TodoCard}/> */}

        <Basic />
      </Router>

    )
    
};
export default App;
