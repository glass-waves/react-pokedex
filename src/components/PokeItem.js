import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        const thisPokemon = this.props.thisPokemon;
        return (
            <div className="pokeDiv">
                <img alt={thisPokemon.pokemon} src={thisPokemon.url_image} />
                <p>Name: {thisPokemon.pokemon}</p>
                <p>Type: {thisPokemon.type_1}</p>
                <p>Attack: {thisPokemon.attack}</p>
                <p>Defense: {thisPokemon.defense}</p>
                <p>HP: {thisPokemon.hp}</p>
            </div>
        )
    }
}
