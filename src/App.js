import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ScrollBar from './scrollBar/index.jsx';

import './App.css';

class App extends PureComponent {

    render() {
        return (
            <Router className="app">
                <Route exact path="/scrollBar" component={ScrollBar} />
            </Router>
        );
    }
}

export default App;
