import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollBarComponent from './scrollBar/index.jsx';
import EventEmitterComponent from './eventEmitter/index.jsx';
import Fetch from './fetch/index.jsx';


import './App.css';

class App extends PureComponent {
    render() {
        return (
            <Router className="app">
                <Route path="/eventEmitter" component={EventEmitterComponent} />
                <Route path="/scrollBar" component={ScrollBarComponent} />
                <Route path="/fetch" component={Fetch} />
            </Router>
        );
    }
}

export default App;
