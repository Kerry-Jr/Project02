import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal"
class ViewPostModal extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.toggle}>
        <Modal.Header closeButton>
          <Modal.Title><p className="modalTitle">{this.props.author}</p></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              {this.props.content}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.toggle} className="btn btn-secondary cardBtn">Close</button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ViewPostModal;