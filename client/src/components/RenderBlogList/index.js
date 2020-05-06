import React from 'react';
import { Link } from 'react-router-dom';



const RenderBlogList = props => {
  const renderBlogListItems = () => {
    if (props.items.length === 0) {
        return <h1>No blogs yet</h1>;
      } else {
      return props.items.map(blog => {
        return (
          <div key={blog.id}>
            <Link to={`/blogs/${blog.id}`}><li >{blog.text}</li></Link>
            <button onClick={ () => props.handleDelete(blog.id) }>Delete</button>
            <button onClick={ () => props.handleUpdateCompletedBlog(blog.id) }>Update</button>
          </div>
        )
      });
    }
  }
  return (
    <ul>
      { renderBlogListItems() }
    </ul>
  );
};
export default RenderBlogList;
