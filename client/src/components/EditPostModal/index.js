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
          <h4>{this.props.author}</h4>
          <form>
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
          <button onClick={() => this.props.handleUpdate(this.props.id)} className="btn btn-primary btn-lg mr-4 cardBtn" type="submit">Update</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default EditPostModal;