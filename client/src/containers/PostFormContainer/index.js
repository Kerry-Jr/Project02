import React, { Component } from 'react';
import PostForm from '../../components/PostForm';
import axios from 'axios';

class PostFormContainer extends Component {
  state = {
    author: '',
    blogs: [],
    content: '',
  }

  handleInputChange = event => {

    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/blogs', { content: this.state.content, author: this.state.author });
      const blogs = [...this.state.blogs, data];
      this.setState({ blogs, content: '', author: '' });

    } catch (e) {
      console.log(e);
    }

  }

  render() {
    return (
      <PostForm
        author={this.state.author}
        content={this.state.content}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }
}

export default PostFormContainer;