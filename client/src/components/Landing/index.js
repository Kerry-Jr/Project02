import React, { Component } from 'react'
import PostForm from '../PostForm'
import { withRouter, Link } from 'react-router-dom';
import './style.css';
import PostFormContainer from '../../containers/PostFormContainer';


class Landing extends Component {
  render() {
    return (

      
        <div className='row no-gutters'>
          <div className='col-3 offset-3'>


          </div>

          <div className='col-6' className='blogspot'>

       
          </div>
        </div>





    )
  }
}

export default withRouter(Landing);