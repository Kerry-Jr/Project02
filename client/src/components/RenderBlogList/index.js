import React from 'react';
import { Link } from 'react-router-dom';
import BlogCardBoot from '../BlogCardBoot'



const RenderBlogList = props => {
  const renderBlogListItems = () => {
    console.log(props)
    if (props.items.length === 0) {
        return <h1>No blogs yet</h1>;
      } else {
      return props.items.map(blog => {
        return (
          <div key={blog.id}>
            <BlogCardBoot 
            name={blog.name}
            text={blog.text} 
            author={blog.author} 
            title={blog.title} 
            image={blog.image} 
            handleDelete={() => props.handleDelete(blog.id)} 
            handleUpdateBlog={() => props.handleUpdateBlog(blog.id)}
            />
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
