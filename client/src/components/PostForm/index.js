import React from 'react';

function PostForm() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name." />
        </div>


        <div className="form-group">
          <label for="exampleFormControlTextarea1">How are you staying sane in quarantine?</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Keep it clean!"></textarea>
        </div>

        <button type="button" className="btn btn-secondary btn-lg">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;