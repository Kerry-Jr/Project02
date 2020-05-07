import React from "react";
import EditPostModal from "../EditPostModal"
import EditPostToggle from "../EditPostToggle"


const BlogCardBoot = (props) => {
  return (
    <div>
      <div className="card" style={{ height: 500}}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
          <p className="card-text">
            {props.text}
          </p>
          <div>
        <button class="mt-auto btn btn-primary" rol="button" onClick={ () => props.handleDelete(props.id) }>Delete</button>
        <EditPostToggle>
              {({ show, toggle, handleSubmit, handleChange, deletePost, author, textbox }) => (
                <EditPostModal show={show} toggle={toggle} handleSubmit={handleSubmit} handleChange={handleChange} deletePost={deletePost} author={author} textbox={textbox} />
              )}
        </EditPostToggle>
        {/* <Link to={`/blogs/${props.id}`}><li >{props.date}</li></Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardBoot;
