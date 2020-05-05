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
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <Link to="/post" className="btn btn-primary btn-lg" role="button">Post</Link>
          </div>
        </div>

    





    )
  }
}

export default withRouter(Landing);