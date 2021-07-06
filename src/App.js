import React from "react";
import { hot } from "react-hot-loader";
import Album from "./album/Album";
import Contact from './contact_search_service/Contact';
import Home from './Home'
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'


const App = () => (
    <div>
         <div className="albums-app">
                <h1>React Interview Challenge</h1>
        <Router>
           
                <Route path="/" exact component={Home} />
                <Route path="/album"  component={Album} />
                <Route path="/contact"  component={Contact} />
            
        </Router>
        </div>

    </div>
);

export default hot(module)(App);
