import React from "react";
import ListResult from "./ListResult";
import SearchBar from "./SearchBar";
import '../styles/Home.css'


const Home = () => {

    return (
        <div className="div-home">
            <SearchBar />
            <ListResult />
        </div>
    )
}

export default Home;