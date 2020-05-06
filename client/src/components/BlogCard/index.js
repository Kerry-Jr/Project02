import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const BlogCard = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="Blog" src="https://images.unsplash.com/photo-1490199444786-9d1faf6fbeb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
      </div>
      <div className="content">
        
        <h2>Title:</h2> {props.id}
        <p>{props.text}</p>
      </div>
      <div>
      <button class="btn btn-primary" rol="button" onClick={ () => props.handleDelete(props.id) }>Delete</button>
        <button class="btn btn-primary" rol="button" onClick={ () => props.handleUpdateCompletedBlog(props.id) }>Update</button>
      </div>

        {/* <Link to={`/blogs/${props.id}`}><li >{props.text}</li></Link> */}
    </div>
  );
};

export default BlogCard;