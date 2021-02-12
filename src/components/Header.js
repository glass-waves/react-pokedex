import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div></div>
                <div>
                    <h1>PokeDex</h1>
                </div>
                <nav>
                    <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                    <NavLink exact activeClassName="selected" to="/search">PokeDex</NavLink>

                </nav>
            </header>
        )
    }
}
