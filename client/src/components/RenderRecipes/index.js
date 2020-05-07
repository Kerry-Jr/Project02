import React, { Component } from "react";
import Axios from "axios";
const api_Key = "fa3502941336b2865937f7efea9a0b60";
const api_ID = "3aaa0d6e";

class getRecipe extends Component {
  state = {
    recipeTitle: "chicken",
    recipeDetail: [],
  };
  //Define onclick method to display recipes
  getRecipe = async (event) => {
    event.preventDefault();
    try {
      const { data } = await Axios.get(
        `https://api.edamam.com/search?q=${this.state.recipeTitle}&app_id=${api_ID}&app_key=${api_Key}`
      );
      console.log(data);
      
      this.setState({
        recipeDetail: data.recipes[0],
      });
      console.log(data);
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
    const recipe = this.state.recipeDetail;
  }
  render() {
    return (
      <div>
        <div>
          <div id="app" class="container">
            
              {/* <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>  */}
            <input
              type="text"
              name="recipeTitle"
              value={this.state.recipeTitle}
              onChange={this.handleInput}
            />

            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={(e) => this.getRecipe(e)}
              type="button"
            >
              Get Recipes
            </button>
          </div>
          <img src={recipe.image_url} alt={recipe.title} />
        </div>
        <div>
          <Link to="/">{"RenderRecipes"}</Link>
          <h4>{this.state.recipeTitle}</h4>
          <img src={} />
        </div>
      </div>
    );
  }
}
//DOMRouter
ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={RenderRecipes} path="/"></Route>
  </Router>,
  document.getElementById("app")
);
//add a container DIV in HTML to render RenderRecipes Component

export default getRecipe;
