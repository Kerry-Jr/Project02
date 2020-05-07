import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Landing from '../Landing/index.js';
import './../../components/Landing/style.css'
import Pokedex from '../../containers/Pokedex'
import PostFormContainer from '../../containers/PostFormContainer/index.js'
import BlogCard from '../../containers/BlogUpdateCard'
// import EditPost from '../EditPost'

import ViewPosts from '../../containers/ViewPosts/ViewPosts'

// animations example
import Component1 from './../Component1';
import Component2 from './../Component2';
import Component3 from './../Component3';
// need below to animate
import { Spring, Transition, animated } from 'react-spring/renderprops';


class App extends Component {

  state = {
    showComponent3: false
  }

  
  // this function isn't connected for some reason
  // toggle = e => this.setState({ showComponent3: !this.state.showComponent3 });
  

  render() {
    return (
      <Spring
        // from={{ opacity: 0, marginTop: -500 }}
        // to={{ opacity: 1, marginTop: 0 }}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        config={{ delay: 500, duration: 500}}
      >
  
        {props => (
          <div style={props}>
            <div className="container-fluid App">
              <Router>
                <Navbar />
  
                {/* <PostFormContainer /> */}
  
                <Route exact path="/" component={Landing} />
                <Route exact path="/post" component={PostFormContainer} />
                <Route exact path="/edit/:blogId" component={BlogCard} />
  
                <Route exact path='/pokedex' component={Pokedex} />
  
                <Route exact path="/view" component={ViewPosts} />
                {/* <Route exact path="/edit/:blogId" component={EditPost}/> */}
  
                {/* animation components */}
                <Component1 />
  
                <Component2 toggle={this.toggle} />

                <Component3 />

                {/* <Transition
                  native
                  items={this.state.showComponent3}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                >
                  {show => show && (props => (
                    <animated.div style={props}>
                      <Component3 />
                    </animated.div>
                  ))}

                </Transition> */}
  
              </Router>
            </div>
          </div>
        )}
  
      </Spring>
  
  
    )
  }
}

// const App = () => {
//   return (
//     <Spring
//       // from={{ opacity: 0, marginTop: -500 }}
//       // to={{ opacity: 1, marginTop: 0 }}
//       from={{ opacity: 0}}
//       to={{ opacity: 1}}
//       config={{ delay: 500, duration: 500}}
//     >

//       {props => (
//         <div style={props}>
//           <div className="container-fluid App">
//             <Router>
//               <Navbar />

//               {/* <PostFormContainer /> */}

//               <Route exact path="/" component={Landing} />
//               <Route exact path="/post" component={PostFormContainer} />
//               <Route exact path="/edit/:blogId" component={BlogCard} />

//               <Route exact path='/pokedex' component={Pokedex} />

//               <Route exact path="/view" component={ViewPosts} />
//               {/* <Route exact path="/edit/:blogId" component={EditPost}/> */}

//               <Component1 />

//               <Component2 />

//             </Router>
//           </div>
//         </div>
//       )}

//     </Spring>


//   )

// };

export default App;