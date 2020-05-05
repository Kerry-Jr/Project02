import React from 'react';

function PostForm(props) {
  return (
    <div className="container">
      <form>
        {/* Name input box */}
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            name="name"
            value={props.value.name} 
            onChange={props.handleInputChange}
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Enter your name." 
          />
        </div>

        {/* Text input box */}
        <div className="form-group">
          <label for="exampleFormControlTextarea1">How are you staying sane in quarantine?</label>
          <textarea
            name="textbox"
            value={props.value.textbox}
            onChange={props.handleInputChange}
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Keep it clean!">
          </textarea>
        </div>

        <button onClick={props.handleFormSubmit} type="button" className="btn btn-secondary btn-lg">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;