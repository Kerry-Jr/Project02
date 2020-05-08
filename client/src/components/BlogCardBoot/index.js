import React from "react";
import { Link } from "react-router-dom";
import ViewPostToggle from './../ViewPostToggle';
import ViewPostModal from './../ViewPostModal';
import EditPostToggle from './../EditPostToggle';
import EditPostModal from './../EditPostModal';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

import './../../components/Landing/style.css';



const BlogCardBoot = (props) => {
  return ( 
    
    <div>
      <div className="card" style={{ height: 500}}>
        <div className="card-body d-flex flex-column">

          <h5 className="card-title">{props.id}</h5>
          <h6 className="card-subtitle mb-2">{props.author}</h6>

          <p className="card-text">
            {props.content}
          </p>
          <div>
          <ViewPostToggle >
              {({ show, toggle }) => (
                <ViewPostModal 
                show={show} 
                toggle={toggle} 
                author={props.author} 
                content={props.content}
                
                />
              )}
            </ViewPostToggle>
        <button class="mt-auto btn btn-primary cardbtn" rol="button" onClick={ () => props.handleDelete(props.id) }>Delete</button>
        {/* <button class="mt-auto btn btn-primary cardbtn" rol="button" onClick={ () => props.handleUpdateCompletedBlog(props.id) }>Update</button> */}
        <EditPostToggle>
              {({ show, toggle, handleSubmit, handleChange, deletePost, author, content }) => (
                <EditPostModal show={show} toggle={toggle} handleSubmit={handleSubmit} handleChange={handleChange} deletePost={deletePost} author={author} content={content} />
              )}
            </EditPostToggle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardBoot;
