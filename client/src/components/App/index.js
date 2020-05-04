import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Counter from '../../containers/Counter';
import TodoForm from '../../containers/TodoForm';
import TodoCard from '../../containers/TodoCard';
import Navbar from '../Navbar';

const App = () => (
    <Router>
      <Navbar/>
      <Route exact path='/' component={TodoForm}/>
      <Route exact path='/counter' component={Counter}/>
      <Route exact path='/todos' component={TodoForm}/>
      <Route exact path='/todos/:todoId' component={TodoCard}/>
    </Router>
);
export default App;
