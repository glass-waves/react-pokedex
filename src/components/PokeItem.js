import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        const thisPokemon = this.props.thisPokemon;
        const divStyle = {
            border: "solid",
            borderWidth: "15px",
            borderColor: thisPokemon.color_1,
            backgroundColor: 'white'
        }

        return (
            <div className="pokeDiv" style={divStyle} >
                <div>
                    <img alt={thisPokemon.pokemon} src={thisPokemon.url_image} />
                </div>
                <div style={{ color: thisPokemon.color_1 }}>
                    <p>Name: {thisPokemon.pokemon}</p>
                    <p>Type: {thisPokemon.type_1}</p>
                    <p>Attack: {thisPokemon.attack}</p>
                    <p>Defense: {thisPokemon.defense}</p>
                    <p>HP: {thisPokemon.hp}</p>
                </div>
            </div>
        )
    }
}
