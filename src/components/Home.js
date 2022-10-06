import React, { useState } from "react";
import ListResult from "./ListResult";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";


const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    
    const onFormSubmit = searchBarTerm => {
        setSearchTerm(searchBarTerm);
    }

    return (
        <div>
            <SearchBar onFormSubmit={onFormSubmit}/>
            <ListResult searchTerm={searchTerm}/>
        </div>
    )
}

export default Home;