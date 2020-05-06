import React, { Component } from 'react';
import RenderBlogList from '../../components/RenderBlogList'
import axios from 'axios';
import DisplayPost from './../../components/DisplayPost';


class ViewPosts extends Component {
  state = {
    blogs: []
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

  handleDeleteBlog = async id => {
    try {
      const { data } = await axios.delete(`/api/blogs/${id}`);
      this.setState({ blogs: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleUpdateCompletedBlog = async id => {
    try {
      const { data } = await axios.patch(`/api/blogs/${id}`);
      this.setState({ blogs: data });
    } catch (e) {
      console.log(e);
    }
  }
  
  render(){
    console.log(this.props)
  return (
    <div>
      <h1>This will be the view posts page</h1>
      <RenderBlogList
      test={this.state.sample}
      items={this.state.blogs}
      handleDelete={this.handleDeleteBlog}
      handleUpdateCompletedTodo={this.handleUpdateCompletedBlog}/>
      <p>Demo post</p>
      <DisplayPost />


    </div>

  );
    }
}


export default ViewPosts;