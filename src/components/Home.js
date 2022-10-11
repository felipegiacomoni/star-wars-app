import React, { useState } from "react";
import ListResult from "./ListResult";
import SearchBar from "./SearchBar";
import '../styles/Home.css'


const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    
    const onFormSubmit = searchBarTerm => {
        setSearchTerm(searchBarTerm);
    }

    return (
        <div className="div-home">
            <SearchBar onFormSubmit={onFormSubmit}/>
            <ListResult searchTerm={searchTerm}/>
        </div>
    )
}

export default Home;