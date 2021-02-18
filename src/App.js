
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './components/Header.js';
import Search from './Search.js';
import Home from './Home.js';

import React, { Component } from 'react'
import DetailPage from './DetailPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <Home {...routerProps} />}
                        />

                        <Route
                            path="/search"
                            exact
                            render={(routerProps) => <Search {...routerProps} />}
                        />

                        <Route
                            path="/:pokemonID"
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />}
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}



