import React from 'react';
import './../../assets/css/style.css';


function PostForm(props) {
  return (
    <div className="container-fluid bg-img">
      <div className="container">
        <form className="top-form">
          <div className="form-group">
            <label className="formfont">Name</label>
            <input
              name="author"
              value={props.author}
              onChange={props.handleInputChange}
              type="text"
              className="form-control"
              placeholder="Enter your name."
            />
          </div>
          <div className="form-group">
            <label>How are you staying sane in quarantine?</label>
            <textarea
              name="content"
              value={props.content}
              onChange={props.handleInputChange}
              className="form-control"
              rows="10"
              placeholder="Keep it clean!">
            </textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;