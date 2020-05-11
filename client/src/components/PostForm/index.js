import React from 'react';
import './../../components/Landing/style.css';


function PostForm(props) {
  return (
    <div className="container-fluid bg-img">
    <div className="container">
      <form className="top-form">
        {/* Name input box */}
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

        {/* Text input box */}
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

        {/* <button onClick={()=> props.handleFormSubmit} type="button" className="btn btn-secondary btn-lg">Submit</button> */}
      </form>
    </div>
    </div>
  );
}

export default PostForm;