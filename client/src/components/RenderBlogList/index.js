import React from 'react';
import { Link } from 'react-router-dom';
import BlogCardBoot from '../BlogCardBoot'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const RenderBlogList = props => {
  const renderBlogListItems = () => {
    console.log(props)
    if (props.items.length === 0) {
        return <h1>No blogs yet</h1>;
      } else {
      return props.items.map(blog => {
        return (

              <Col>
                <div key={blog.id}>
                    <BlogCardBoot name={blog.name} text={blog.text} author={blog.author} title={blog.title} image={blog.image} handleDelete={props.handleDelete} handleUpdateCompletedBlog={props.handleUpdateBlog} id={blog.id}/>
                </div>
              </Col>
        )
      });
    }
  }
  return (
    <Row>
      { renderBlogListItems() }
      </Row>
  );
};
export default RenderBlogList;
