import React, { Component } from 'react';
import Axios from 'axios';
import PokemonCard from "../PokemonCard"
// import PokemonCard from "../PokemonCard/index"
// // import Axios from 'axios';

class Pokedex extends Component {
  state = {
    counter: 0,
    pokemonSearched: false,
    pokemonName: '',
    pokemonInput: '',
    pokemonHeld: '',
    pokemonAbility: '',
    pokemonHeight: '',
    pokemonSprite: '',
    pokemonSpriteShiny: '',
    pokemonStats: [],
    pokemonMoves: []
  }
  handleInput = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }
  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonInput}`);
      // console.log(data)
      // console.log(data.sprites.front_default)
      this.setState({ pokemonSprite: data.sprites.front_default })
      // console.log(data.sprites.front_shiny)
      this.setState({ pokemonSpriteShiny: data.sprites.front_shiny })
      // console.log(data.abilities[0].ability.name)
      this.setState({ pokemonAbility: data.abilities[0].ability.name })
      
      this.setState({ pokemonHeight: data.height })
      
      this.setState({ pokemonName: data.species.name })
      
      this.setState({ pokemonStats: data.stats })
      // console.log(data.held_items)
      
      this.setState({ pokemonMoves: data.moves })
      console.log(this.state.pokemonSprite)
      console.log(this.state.pokemonSpriteShiny)
      console.log(this.state.pokemonName)
      console.log(this.state.pokemonAbility)
      console.log(this.state.pokemonHeight)
      console.log(this.state.pokemonStats)
      console.log(this.state.pokemonMoves)

       this.setState({ pokemonSearched: true })
      // there will need to be a post to the database here to store the pokemon
      // this.setState({ todo: data })
      
    } catch (e) {
      console.log(e)
    }

  }



  render() {
    console.log("Rendered inside of counter");
    console.log(this.props);
    return (
      <div>
        <form>
          <h1>Pokemon</h1>
          <input
          name="pokemonInput"
          value={this.state.pokemonInput}
          onChange={this.handleInput}
          />
          {/* <button onClick={(e) => this.handleSubmit(e)}><Link>Look up Pokemon</Link></button> */}
          <button onClick={(e) => this.handleSubmit(e)}>Look up Pokemon</button>

        </form>
        <div>
        { this.state.pokemonSearched ? <PokemonCard name={this.state.pokemonName} ability={this.state.pokemonAbility} image={this.state.pokemonSpriteShiny} height={this.state.pokemonHeight} stats={this.state.pokemonStats}/> : null }
        </div>
      
        {/* <button onClick={this.props.history.goBack}>Go Back</button>
        <button onClick={ () => this.props.history.push('/todos') }>Go to todos</button> */}
      </div>
    );
  }
}

export default Pokedex;