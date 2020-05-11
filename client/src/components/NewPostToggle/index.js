import React, { Component } from 'react';
import axios from 'axios';

class NewPostToggle extends Component {

  state = {
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

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    if (!this.state.author || !this.state.content) {
      alert("Please fill something out.");
    } else {
      try {
        const { data } = await axios.post('/api/blogs', { content: this.state.content, author: this.state.author });
        this.toggle();
      } catch (e) {
        console.log(e);
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle} className="btn btn-primary btn-lg ml-3"><i class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;New Post</button>
        {this.props.children({
          show: this.state.show,
          toggle: this.toggle,
          handleSubmit: this.handleFormSubmit,
          handleChange: this.handleInputChange,
          author: this.state.author,
          content: this.state.content
        })}
      </div>
    )
  }
}

export default NewPostToggle;