import React, { useState } from "react";
import SearchBar from "./SearchBar";
import logo from '../styles/star_wars_logo.png';
import '../styles/App.css'
import ListResult from "./ListResult";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const onFormSubmit = searchBarTerm => {
        setSearchTerm(searchBarTerm);
    }

    return (
        <div className="background-app">
            <div className="background-logo-app">
                <img src={logo} alt="Star Wars API"/>
            </div>
            <SearchBar onFormSubmit={onFormSubmit}/>
            <ListResult searchTerm={searchTerm}/>
        </div>
    )
}

export default App;