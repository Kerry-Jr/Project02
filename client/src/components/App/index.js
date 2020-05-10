import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing/index.js';
import './../../components/Landing/style.css'
import Pokedex from '../../containers/Pokedex'
import PostFormContainer from '../../containers/PostFormContainer/index.js'
import BlogCard from '../../containers/BlogUpdateCard'
import RenderRecipes from '../../components/RenderRecipes'
import ViewPosts from '../../containers/ViewPosts'
import { Spring } from 'react-spring/renderprops';

class App extends Component {

  state = {
    showComponent3: false
  }

  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 2000 }}
      >
        {props => (
          <div className="container-fluid" style={props}>
            <div className="container-fluid">
              <Router>
                <Navbar />
                <Route exact path="/" component={Landing} />
                <Route exact path="/post" component={PostFormContainer} />
                <Route exact path="/edit/:blogId" component={BlogCard} />
                <Route exact path='/renderrecipes' component={RenderRecipes} />
                <Route exact path='/pokedex' component={Pokedex} />
                <Route exact path="/view" component={ViewPosts} />
              </Router>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

export default App;