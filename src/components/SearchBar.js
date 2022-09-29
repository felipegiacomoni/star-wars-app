import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import '../styles/SearchBar.css';
import { connect } from "react-redux";
import { filterResults } from "../actions";

const SearchBar = props => {
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        {label: 'Films', param: 'films'},
        {label: 'People', param: 'people'},
        {label: 'Planets', param: 'planets'},
        {label: 'Species', param: 'species'},
        {label: 'Starships', param: 'starships'},
        {label: 'Vehicles', param: 'vehicles'},
    ] 

    const getButtons = () =>{
        return(
            categories.map(cat => {
                return <CategoryButton key={cat.param} category={cat}/>
            })
        )
    }

    const onFormSubmit = event => {
        event.preventDefault();
        props.filterResults(searchTerm);
    }

    const onInputChange = event => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="ui segment search-bar search-bar-background ">
            <form className="ui form form-search-bar" onSubmit={onFormSubmit}>
                <div className="field div-search-bar">
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={onInputChange} className="input-search-bar"/>
                </div>
            </form>
            <div className="ui buttons div-category-select">
                {getButtons()}
            </div>
        </div>
    )
}

export default connect(null, {filterResults})(SearchBar);
