import React from "react";
import SearchBar from "./SearchBar";
import logo from '../styles/star_wars_logo.png';
import '../styles/App.css'
import ListResult from "./ListResult";

const App = () => {
    return (
        <div className="background-app">
            <div className="background-logo-app">
                <img src={logo}/>
            </div>
            <SearchBar />
            <ListResult />
        </div>
    )
}

export default App;