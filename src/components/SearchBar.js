import React from "react";
import CategoryButton from "./CategoryButton";
import '../styles/SearchBar.css';
import { connect } from "react-redux";

const SearchBar = props => {
    const categories = [
        // {label: 'Films', param: 'films'},
        {label: 'People', param: 'people', icon: 'people.webp'},
        {label: 'Planets', param: 'planets', icon: 'planets.webp'},
        {label: 'Species', param: 'species', icon: 'species.png'},
        {label: 'Starships', param: 'starships', icon: 'starships.webp'},
        {label: 'Vehicles', param: 'vehicles', icon: 'vehicle.png'},
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
    }

    const onInputChange = event => {
        props.onFormSubmit(event.target.value);
    }

    return (
        <div className="ui segment search-bar search-bar-background ">
            <form className="ui form form-search-bar" onSubmit={onFormSubmit}>
                <div className="field div-search-bar">
                    <input type="text" placeholder="Filter..." onChange={onInputChange} className="input-search-bar"/>
                </div>
            </form>
            <div className="ui buttons div-category-select">
                {getButtons()}
            </div>
        </div>
    )
}

export default connect(null)(SearchBar);
