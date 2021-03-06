import React from "react";
import ViewPostToggle from './../ViewPostToggle';
import ViewPostModal from './../ViewPostModal';
import EditPostToggle from './../EditPostToggle';
import EditPostModal from './../EditPostModal';
import './../../assets/css/style.css';

const BlogCardBoot = (props) => {
  return (
    <div>
      <div className="card" style={{ height: 500 }}>
        <div className="card-body d-flex flex-column">
          <h3 className="card-subtitle mb-2">{props.author}</h3>
          <div className='underline'></div>
          <p className="card-text">
            {props.content}
          </p>
          <div style={{ textAlign: "center" }}>
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
              <button class="mt-auto btn btn-primary btn-lg cardbtn" rol="button" onClick={() => props.handleDelete(props.id)}>Delete</button>
            </div>
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
