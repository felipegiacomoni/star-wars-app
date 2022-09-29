import React from "react";
import CategoryButton from "./CategoryButton";
import '../styles/SearchBar.css'

const SearchBar = () => {
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

    return (
        <div className="ui segment search-bar search-bar-background">
            <form className="ui form">
                <div className="field div-search-bar">
                    <input type="text" placeholder="Search..." className="input-search-bar"/>
                    <div className="ui buttons div-category-select">
                        {getButtons()}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
