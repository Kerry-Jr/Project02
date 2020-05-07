import React, { Component } from 'react';
import axios from 'axios';

class BlogCard extends Component {
  state = {
    blog: {
      text: '',
      id: ''
    },
    blogInput: '',
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/blogs/${this.props.match.blogId}`);
      this.setState({ blog: data });
      console.log(data);
    } catch (e) {

    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleUpdateText = async () => {
    try {
      const { data } = await axios.patch(`/api/blogs/${this.props.match.params.blogId}`, { text: this.state.blogInput }); // <get data from back end
      this.setState({ blog: data, text: '' });
    } catch (e) {
      console.log(e);
    }
  }

  handleDelete = async () => {
    try {
      await axios.delete(`/api/blogs/${this.props.match.params.blogId}`);
      this.props.history.push('/blogs'); // <---- this is from this.props given to use from react-router
    } catch (e) {
      console.log(e)
    }
  } 

  render() {
    console.log(this.props); 
    return (
      <div>
        <p>{this.state.blog.text}</p>
        <p>{this.state.blog.id}</p>
          <input
            name="blogInput"
            value={this.state.blogInput}
            onChange={this.handleInputChange}
          />
        <button onClick={this.handleUpdateText}>Update Text</button>
        <button onClick={this.props.history.goBack}>Go Back</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
      
    )
  }
}

export default BlogCard;