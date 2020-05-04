import React, { Component } from 'react';
import PostForm from '../../components/PostForm';

class PostFormContainer extends Component {
  state = {
    name: '',
    textbox: '',
  }

  // handleInputChange function
  handleInputChange = event => {
    // get the name and value of the input box
    // console.log(event.target.name);
    // console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name] : value });
  }

  // handleFormButton function (THIS IS THE SUBMIT BUTTON)
  // NEXT STEP: this function should take all the info and add it to the database
  handleFormSubmit = event => {
    event.preventDefault();
    // this.state.name is what the user types in the name box.
    // this.state.textbox is what the user types in the text box.
    console.log(this.state.name);
    console.log(this.state.textbox);
    alert("You clicked the button!");
    // clear out the input box and textbox after the user clicks submit
    this.setState({ name: ''});
    this.setState({ textbox: ''});
  }

  // NEXT STEP:  Create a function that makes a request to the database

  render() {
    return (
      <PostForm 
        value={this.state}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default PostFormContainer;