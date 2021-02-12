import React, { Component } from 'react'
import PokeItem from './PokeItem';

export default class PokeList extends Component {
    render() {
        const filteredList = this.props.filteredList;
        return (
            <div className="pokeContainer">
                {filteredList.map(listItem => <PokeItem thisPokemon={listItem} />)}
            </div>
        )
    }
}
