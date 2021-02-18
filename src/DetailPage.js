import React, { Component } from 'react'
import request from 'superagent'
import Spinner from './components/Spinner'

export default class DetailPage extends Component {

    state = {
        pokeData: {},
        loading: false,
    }
    componentDidMount = async () => {
        await this.setState({
            loading: true,
        })
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.pokemonID}`);

        await this.setState({
            loading: false,
            pokeData: data.body
        })
    }
    render() {

        return (
            <>
            {this.state.loading ?
                <Spinner /> :
            <div className="detailBox"
                style={{
                    borderColor: `${this.state.pokeData.color_1}`

                }}>
                <h1>{this.state.pokeData.pokemon}</h1>
                <img src={this.state.pokeData.url_image} />
                <table>
                    <tr>
                        <td className="boldTd">Ability 1</td>
                        <td>{this.state.pokeData.ability_1}</td>
                    </tr>
                    <tr>
                        <td className="boldTd">Ability 2</td>
                        <td>{this.state.pokeData.ability_2}</td>
                    </tr>
                    <tr>
                        <td className="boldTd">Attack</td>
                        <td>{this.state.pokeData.attack}</td>
                    </tr>
                    <tr>
                        <td className="boldTd">Defense </td>
                        <td>{this.state.pokeData.defense}</td>
                    </tr>
                    <tr>
                        <td className="boldTd">Height</td>
                        <td>{this.state.pokeData.height}</td>
                    </tr>
                    <tr>
                        <td className="boldTd">Weight</td>
                        <td>{this.state.pokeData.weight}</td>
                    </tr>
                    <tr>
                        <td className="boldTd">HP</td>
                        <td>{this.state.pokeData.hp}</td>
                    </tr>
                    <tr>
                        <td className="boldTd">Speed</td>
                        <td>{this.state.pokeData.speed}</td>
                    </tr>
                    <tr>
                        <td className="boldTd">Base Pokemon</td>
                        <td>{this.state.pokeData.pokebase}</td>
                    </tr>
                </table>
            </div>
            }
            </>
        )
    }
}
