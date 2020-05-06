import React, { Component } from 'react';
import axios from 'axios';

class NewPostToggle extends Component {

  state = {
    name: '',
    textbox: '',
    show: false
  }

  toggle = () => {
    if (this.state.show) {
      this.setState({
        show: !this.state.show,
        textbox: '', 
        name: ''
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
    console.log("You clicked the button!");
    try {
      const { data } = await axios.post('/api/blogs', { text: this.state.textbox, author: this.state.name });
      console.log(data)
      this.toggle();
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle} className="btn btn-primary btn-lg ml-3">New Post</button>
        {this.props.children({
          show: this.state.show,
          toggle: this.toggle,
          handleSubmit: this.handleFormSubmit,
          handleChange: this.handleInputChange,
          author: this.state.name,
          textbox: this.state.textbox
        })}
      </div>
    )
  }
}


export default NewPostToggle;