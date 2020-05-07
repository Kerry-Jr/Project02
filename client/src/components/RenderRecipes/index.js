import React, { Component } from "react";
import axios from "axios";
const api_Key = "fa3502941336b2865937f7efea9a0b60";
const api_ID = "3aaa0d6e";

class RenderRecipes extends Component {
  state = {
    recipeTitle: "",
    recipeDetail: {},
    gotRecipe: false,
  };
  //Define onclick method to display recipes
  getRecipe = async () => {
    // event.preventDefault();
    console.log(api_Key , api_ID)
    try {
      const { hits } = await axios.get(
        `https://api.edamam.com/search?q=${this.state.recipeTitle}&app_id=${api_ID}&app_key=${api_Key}`
      );
      // const body = JSON.stringify({
      //      title: data.get('RecipeTitle'),
      //      content: data.get('recipeDetail'),
      //  });
      console.log(hits);
      this.setState({
        recipeDetail: hits[0],
        gotRecipe: true
      });
    } catch (e) {
      console.log(e);
    }
    // alert('' + + '' + this.state.getRecipe);
    //define axios
  };
  handleInput = (event) => {
    const { value, name } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  componentDidMount() {
    console.log("i mounted");
    // const recipe = this.state.recipeDetail;
  }
  render() {
    return (
      <div className="mt-4">
        <div>
          <div id="app" className="container">
            
              {/* <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>  */}
            <input
              type="text"
              name="recipeTitle"
              value={this.state.recipeTitle}
              onChange={this.handleInput}
            />

            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={this.getRecipe}
              type="button">Get Recipes</button>
          </div>
          {/* <img src={recipe.image_url} alt={recipe.title} /> */}
        </div>
        <div>
          {/* <Link to="/">{"RenderRecipes"}</Link> */}
          {/* <h4>{this.state.recipeTitle}</h4> */}
          {/* <img src={} /> */}
          {this.state.gotRecipe && 
            <div>
              <h4>{this.state.recipeDetail["label"]}</h4>
              <img src={this.state.recipeDetail["image"]} alt={this.state.recipeDetail["label"]} />
              <a href={this.state.recipeDetail["url"]} target="_blank" rel="noopener noreferrer">{this.state.recipeDetail["url"]}</a>
            </div>
          }
        </div>
      </div>
    );
  }
}
//DOMRouter
// render(
//   <Router history={hashHistory}>
//     <Route component={RenderRecipes} path="/"></Route>
//   </Router>,
//   document.getElementById("app")
// );
//add a container DIV in HTML to render RenderRecipes Component

export default RenderRecipes;
