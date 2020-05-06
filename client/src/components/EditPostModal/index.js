import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal"

class EditPostModal extends Component {
  
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="top-form">
            <div className="form-group">
              <label className="formfont">Name</label>
              <input
                name="name"
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
                name="textbox"
                value={this.props.textbox}
                onChange={this.props.handleChange}
                className="form-control"
                rows="10"
                placeholder="Keep it clean!">
              </textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.toggle} className="btn btn-secondary">Close</button>
          <button onClick={this.props.deletePost} className="btn btn-secondary">Delete Post</button>
          <button onClick={this.props.handleSubmit} className="btn btn-primary btn-lg ml-3" type="submit">Update</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default EditPostModal;