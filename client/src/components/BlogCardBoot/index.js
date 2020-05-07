import React from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

const BlogCardBoot = (props) => {
  return ( 
    
    <div>
      <div className="card" style={{ height: 500}}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>
          <p className="card-text">
            {props.text}
          </p>
          <div>
        <button class="mt-auto btn btn-primary" rol="button" onClick={ () => props.handleDelete(props.id) }>Delete</button>

        <button class="mt-auto btn btn-primary" rol="button" onClick={ () => props.handleUpdateCompletedBlog(props.id) }>Update</button>

        <button class="mt-auto btn btn-primary" rol="button" onClick={ () => props.handleUpdateBlog(props.id) }>Update</button>
        {/* <Link to={`/blogs/${props.id}`}><li >{props.date}</li></Link> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardBoot;
