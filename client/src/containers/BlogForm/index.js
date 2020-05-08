import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import RenderBlogList from '../../components/RenderBlogList';

class BlogForm extends Component {
  state = {
    blogs: [],
    blogInput: ''
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/blogs');
      this.setState({ blogs: data });
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
      const { data } = await axios.post('/api/blogs', {text: this.state.blogInput });
      const blogs = [...this.state.blogs, data];
      this.setState({ blogs, blogInput: '' });
    } catch (e) {
      console.log(e);
    }
  }

  handleDeleteBlog = async id => {
    try {
      const { data } = await axios.delete(`/api/blogs/${id}`);
      this.setState({ blogs: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleUpdateText = async event => {
    try {
      const { data } = await axios.patch(`/api/blogs/${this.props.match.params.blogId}`, { text: this.state.blogInput }); // <get data from back end
      this.setState({ blogs: data, text: '' });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log("I rendered inside of Form");
    console.log(this.props);
    return (
      <div>
        <RenderBlogList
          items={this.state.blogs}
          handleUpdateText={this.handleUpdateText}
          handleDelete={this.handleDeleteBlog}/>
        <form>
          <input
            name="blogInput"
            value={this.state.blogInput}
            onChange={this.handleInputChange}
          />
          <button onClick={(e) => this.handleSubmit(e)}>Add blog</button>
        </form>
      </div>
    );
  }
}

export default BlogForm;
