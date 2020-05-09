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
          <h6 className="card-subtitle mb-2">{props.author}</h6>
          <p className="card-text">
            {props.content}
          </p>
          <div style={{ textAlign: "center"}}>
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
            <div>
              <button class="mt-auto btn btn-primary btn-lg cardbtn" rol="button" onClick={ () => props.handleDelete(props.id) }>Delete</button>
            </div>
        {/* <button class="mt-auto btn btn-primary cardbtn" rol="button" onClick={ () => props.handleUpdateCompletedBlog(props.id) }>Update</button> */}
        <EditPostToggle content={props.content} author={props.author} id={props.id} updateBlogs={props.updateBlogs}>
              {({ show, toggle, handleUpdate, handleChange, deletePost, author, content, id }) => (
                <EditPostModal 
                show={show} 
                toggle={toggle} 
                handleUpdate={handleUpdate} 
                handleChange={handleChange} 
                deletePost={deletePost} 
                author={author} 
                content={content} 
                id={id}
                />
              )}
            </EditPostToggle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardBoot;
