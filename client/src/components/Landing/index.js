import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import './../../assets/css/style.css';
import NewPostModal from '../NewPostModal';
import NewPostToggle from '../NewPostToggle';

class Landing extends Component {

  render() {
    return (
      <div>
        <div className="hero-image">
          <div className="hero-text">
            <h1 className="blog-title">Hi Im a new blog site </h1>
            <p className="blog-subtitle">and I'm a paragraph tag</p>
            <NewPostToggle>
              {({ show, toggle, handleSubmit, handleChange, author, content }) => (
                <NewPostModal show={show} toggle={toggle} handleSubmit={handleSubmit} handleChange={handleChange} author={author} content={content} />
              )}
            </NewPostToggle>
            <Link to="/view" className="btn btn-primary btn-lg ml-3" role="button"><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;View</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Landing);