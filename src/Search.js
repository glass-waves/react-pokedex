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
        page: 1,
        perPage: 0,
        count: 0,
        totalPages: 0,
    }
    componentDidMount = async () => {
        await this.fetchPokemon();
    }


    fetchPokemon = async () => {
        console.log('getting data');

        this.setState({ loading: true })

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.search}&sort=${this.state.currentFilter}&direction=${this.state.filterDirection}&page=${this.state.page}`);

        this.setState({
            loading: false,
            data: data.body.results,
            count: data.body.count,
            perPage: data.body.perPage,
            totalPages: data.body.count > 20 ? Math.floor(data.body.count / data.body.perPage) : 1
        })
    }
    handleButtonPress = async () => {
        this.setState({
            page: 1,
        })
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
    handlePrev = async () => {
        if (this.state.page === 1) {
            return;
        } else {
            await this.setState({
                page: this.state.page - 1
            })
        }
        await this.fetchPokemon();
    }
    handleNext = async () => {
        if (this.state.page === this.state.totalPages) {
            return;
        } else {
           await this.setState({
                page: (this.state.page + 1)
            })
        }
        await this.fetchPokemon();
    }
    render() {
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

                    <p className="pages">Page: {this.state.page} of {this.state.totalPages}</p>
                    <button onClick={this.handlePrev}>Previous Page</button>
                    <button onClick={this.handleNext}>Next Page</button>


                    {this.state.loading ? <Spinner /> : <PokeList filteredList={this.state.data} />}

                </section>
            </div >
        )
    }
}

