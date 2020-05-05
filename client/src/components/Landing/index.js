import React, { Component } from 'react'
import PostForm from '../PostForm'
import { withRouter, Link } from 'react-router-dom';
import './style.css';
import PostFormContainer from '../../containers/PostFormContainer';


class Landing extends Component {
  render() {
    return (

        <div>
          <div className="jumbotron">
            <h1 className="display-4">Procrastinator Paradise Blog</h1>
            <p className="lead">Tell us all about how you are coping with the great quarantine of 2020 </p>
            <hr className="my-4" />
            <p>Filler here.</p>
            <Link to="/post" className="btn btn-primary btn-lg btnPost ml-3" role="button">Post</Link>
            <Link to="/view" className="btn btn-primary btn-lg btnPost ml-3" role="button">View</Link>
          </div>
          </div>
     

    





    )
  }
}

export default withRouter(Landing);