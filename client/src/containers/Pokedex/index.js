import React, { Component } from 'react';
import Axios from 'axios';
import PokemonCard from "../PokemonCard"
import Grid from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../../components/Landing/style.css'

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
      this.setState({ pokemonSprite: data.sprites.front_default })
      this.setState({ pokemonSpriteShiny: data.sprites.front_shiny })

      this.setState({ pokemonAbility: data.abilities[0].ability.name })

      this.setState({ pokemonHeight: data.height })

      this.setState({ pokemonName: data.species.name })

      this.setState({ pokemonStats: data.stats })


      this.setState({ pokemonMoves: data.moves })


      this.setState({ pokemonSearched: true })


    } catch (e) {
      console.log(e)
    }

  }

  render() {
    return (
      <div className="pokedexForm">
        <Grid>
          <Row>
            <Col>
              <form>
                <div className="card text-center">
                  <div className="card-header">
                    Featured
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Pokedex</h5>
                    <p className="card-text">Enter the name of a Pokemon you want more information on.</p>
                    <input
                      name="pokemonInput"
                      value={this.state.pokemonInput}
                      onChange={this.handleInput}
                    />
                    <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Look up Pokemon</button>
                  </div>
                  <div className="card-footer text-muted">
                  </div>
                </div>
              </form>
            </Col>
            <Col>
              <div>
                {this.state.pokemonSearched ? <PokemonCard name={this.state.pokemonName} ability={this.state.pokemonAbility} image={this.state.pokemonSpriteShiny} height={this.state.pokemonHeight} stats={this.state.pokemonStats} /> : null}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Pokedex;