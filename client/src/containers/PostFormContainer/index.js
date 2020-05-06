import React, { Component } from 'react';
import PostForm from '../../components/PostForm';
import axios from 'axios';

class PostFormContainer extends Component {
  state = {
    name: '',
    blogs: [],
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

  // handleFormSubmit function (THIS IS THE SUBMIT BUTTON)
  // NEXT STEP: this function should take all the info and add it to the database
  handleFormSubmit = async event => {
    event.preventDefault();
   
    console.log("You clicked the button!");
    // clear out the input box and textbox after the user clicks submit
    try {
      const { data } = await axios.post('/api/blogs', { text: this.state.textbox, author: this.state.name });
      const blogs = [...this.state.blogs, data];
      this.setState({ blogs, textbox: '' });
      this.setState({ name: ''});
    } catch (e) {
      console.log(e);
    }
    // this.setState({ name: ''});
    // this.setState({ textbox: ''});
  }

  // TEMPLATE FOR FORM SUBMIT
  // handleSubmit = async event => {
  //   event.preventDefault();
  //   try {
  //     const { data } = await axios.post('/api/blogs', {text: this.state.blogInput });
  //     const blogs = [...this.state.blogs, data];
  //     this.setState({ blogs, blogInput: '' });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

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