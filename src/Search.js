import React, { Component } from 'react'
import Dropdown from './components/Dropdown.js';
import PokeList from './components/PokeList.js';
import request from 'superagent';
import Spinner from './components/Spinner.js'

export default class Search extends Component {

    state = {
        data: [],
        listOfFilters: ['pokemon', 'type_1', 'attack', 'defense', 'hp'],
        filterDirection: '',
        currentFilter: '',
        search: '',
        loading: false,
    }
    componentDidMount = async () => {
        await this.fetchPokemon();
    }


    fetchPokemon = async () => {
        console.log('getting data');

        this.setState({ loading: true })

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.search}&sort=${this.state.currentFilter}&direction=${this.state.filterDirection}`);

        this.setState({
            loading: false,
            data: data.body.results,
        })
    }
    handleButtonPress = async () => {
        await this.fetchPokemon();
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

    // sortBy = () => {
    //     if (this.state.currentFilter === '' || this.state.filterDirection === '') return;

    //     if (this.state.currentFilter === "attack" || this.state.currentFilter === "defense" || this.state.currentFilter === "hp") {
    //         if (this.state.filterDirection === 'ascending') {
    //             this.state.data.sort((a, b) => a[this.state.currentFilter] - b[this.state.currentFilter])
    //         } else {
    //             this.state.data.sort((a, b) => b[this.state.currentFilter] - a[this.state.currentFilter])
    //         }
    //     } else {
    //         if (this.state.filterDirection === 'ascending') {
    //             this.state.data.sort((a, b) => a[this.state.currentFilter].localeCompare(b[this.state.currentFilter]))
    //         } else {
    //             this.state.data.sort((a, b) => b[this.state.currentFilter].localeCompare(a[this.state.currentFilter]))
    //         }
    //     }
    // }
    // filterArray = () => {
    //     if (this.state.search === '') return this.state.data;
    //     const filteredArr = this.state.data.filter(pokemon => {
    //         console.log(pokemon.pokemon)
    //         if (pokemon.pokemon.includes(this.state.search)) return true;
    //     })
    //     return filteredArr;
    // }

    render() {

        // this.sortBy();
        // const filteredList = this.filterArray();


        return (
            <div className="main">
                <section className="sidebar">
                    <h2>PokeSearch</h2>
                    <label for={this.state.search}> Search by keyword </label>
                    <input value={this.state.search} onChange={this.handleSearchChange} />
                    <Dropdown filterList={['asc', 'desc']} handleChange={this.handleFilterDirection} keyName="Sort Direction" />
                    <Dropdown filterList={this.state.listOfFilters} handleChange={this.handleFilterChange} keyName="Sort By" />
                    <button onClick={this.handleButtonPress}>Search</button>
                </section>

                <section className="pokeDisplay">
                    {this.state.loading?<Spinner /> : <PokeList filteredList={this.state.data} />}
                </section>
            </div >
        )
    }
}

