import React, { Component } from 'react';
import axios from 'axios';

class EditPostToggle extends Component {

  state = {
    id: "",
    author: '',
    content: '',
    show: false
  }

  toggle = () => {
    if (this.state.show) {
      this.setState({
        show: !this.state.show,
        content: '', 
        author: ''
      })
    } else {
      this.setState({
        show: !this.state.show,
      })
    }
  }

  componentDidMount() {
    // make an axios call to get blog post by id
    // save author to name and bodytext to textbox inside this.state
    this.setState({
      author: this.props.author,
      content: this.props.content,
      id: this.props.id
    })
  }
  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    console.log("You clicked the button!");
    try {
      const { data } = await axios.post('/api/blogs', { content: this.state.content, author: this.state.author });
      // axios.patch request to update blog entry in database
      console.log(data)
      this.toggle();
    } catch (e) {
      console.log(e);
    }
  }

  // deletePost = event => {
  //   // axios call to delete blog entry from db by its id
  //   console.log(event);
  // }
  handleUpdateText = async id => {
    console.log(id);
    try {
      const { data } = await axios.patch(`/api/blogs/${id}`, { content: this.state.content });
      console.log(data);
      this.toggle();
      this.props.updateBlogs();
      this.setState({ content: data.content, author: data.author, id: data.id });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle} className="btn btn-primary btn-lg cardBtn mt-0">Edit Post</button>
        {this.props.children({
          show: this.state.show,
          toggle: this.toggle,
          handleUpdate: this.handleUpdateText,
          handleChange: this.handleInputChange,
          author: this.state.author,
          content: this.state.content,
          id: this.state.id
        })}
      </div>
    )
  }
}

export default EditPostToggle;