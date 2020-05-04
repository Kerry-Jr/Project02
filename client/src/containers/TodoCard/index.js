import React, { Component } from 'react';

class TodoCard extends Component {
  state = {
    todo: {
      text: '',
      completed: '',
      id: ''
    }
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <p>Place holder for our todo text</p>
        <p>Place holder for our todo completed</p>
        <p>Place holder for our todo id</p>
        <button onClick={this.props.history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default TodoCard;
