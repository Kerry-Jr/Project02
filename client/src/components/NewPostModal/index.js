import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal"

class NewPostModal extends Component {
  
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.toggle}>
        <Modal.Header closeButton>
          <Modal.Title className="formfont">New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="form-group">
          <form>
            <div className="form-group">
              <label className="formfont">Name</label>
              <input
                name="author"
                value={this.props.author}
                onChange={this.props.handleChange}
                type="text"
                className="form-control"
                placeholder="Enter your name."

              />
            </div>
            <div className="form-group">
              <label>How are you staying sane in quarantine?</label>
              <textarea
                name="content"
                value={this.props.content}
                onChange={this.props.handleChange}
                className="form-control"
                rows="10"
                placeholder="Keep it clean!">
              </textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.toggle} className="btn btn-secondary mr-4 cardBtn">Close</button>
          <button onClick={this.props.handleSubmit} className="btn btn-primary mr-4 cardBtn" type="submit">Post</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default NewPostModal;