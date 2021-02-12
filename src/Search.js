import React, { Component } from 'react'
import Dropdown from './components/Dropdown.js';
import PokeList from './components/PokeList.js';
import pokeData from './Data.js';

export default class Search extends Component {

    state = {
        data: pokeData,
        listOfFilters: ['pokemon', 'type_1', 'attack', 'defense', 'hp'],
        filterDirection: ['ascending', 'descending'],
        currentFilter: "",
        search: ""
    }

    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handleFilterDirection = (e) => {
        this.setState({
            filterDirection: e.target.value
        })
    }
    handleFilterChange = (e) => {
        this.setState({
            currentFilter: e.target.value
        })
    }

    sortBy = () => {
        if(this.state.currentFilter === '' || this.state.filterDirection === '') return;

        if (this.state.filterDirection === 'ascending') {
            this.state.data.sort((a, b) => {
                a[this.state.currentFilter].localeCompare(b[this.state.currentFilter])
            })
        } else {
            this.state.data.sort((a, b) => {
                b[this.state.currentFilter].localeCompare(a[this.state.currentFilter])
            })
        }
    }
    filterArray = () => {
        if(this.state.currentFilter === '') return this.state.data;
        const filteredArr = this.state.data.filter(pokemon => {
            if (pokemon.pokemon === this.state.search) return true;
        })
        return filteredArr;
    }

    render() {
        
        this.sortBy();
        const filteredList = this.filterArray();

        return (
            <div>
                <section className="sidebar">
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <Dropdown filterList={this.state.filterDirection} handleChange={this.handleFilterDirection} keyName="Sort Direction" />
                    <Dropdown filterList={this.state.listOfFilters} handleChange={this.handleFilterChange} keyName="Sort By" />
                </section>
                <section className="pokeDisplay">
                    <PokeList filteredList={filteredList} />
                </section>
            </div >
        )
    }
}

