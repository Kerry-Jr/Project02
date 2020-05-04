import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import RenderTodoList from '../../components/RenderTodoList';

class TodoForm extends Component {
  state = {
    todos: [],
    todoInput: ''
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/todos');
      this.setState({ todos: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/todos', {text: this.state.todoInput });
      const todos = [...this.state.todos, data];
      this.setState({ todos, todoInput: '' });
    } catch (e) {
      console.log(e);
    }
  }

  handleDeleteTodo = async id => {
    try {
      const { data: todos } = await axios.delete(`/api/todos/${id}`);
      this.setState({ todos });
    } catch (e) {
      console.log(e);
    }
  }

  handleUpdateCompletedTodo = async id => {
    try {
      const { data: todos } = await axios.patch(`/api/todos/${id}`);
      this.setState({ todos });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log("I rendered inside of Form");
    console.log(this.props);
    return (
      <div>
        <RenderTodoList
          items={this.state.todos}
          handleUpdateCompletedTodo={this.handleUpdateCompletedTodo}
          handleDelete={this.handleDeleteTodo}/>
        <form>
          <input
            name="todoInput"
            value={this.state.todoInput}
            onChange={this.handleInputChange}
          />
          <button onClick={(e) => this.handleSubmit(e)}>Add todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
