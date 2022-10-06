import React from "react";
import CategoryButton from "./CategoryButton";
import '../styles/SearchBar.css';
import { connect } from "react-redux";
import { categories } from "../utils/Constants";


const SearchBar = props => {
     

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
                    <input type="text" placeholder="Filter on this page..." onChange={onInputChange} className="input-search-bar"/>
                </div>
            </form>
            <div className="ui buttons div-category-select">
                {getButtons()}
            </div>
        </div>
    )
}

export default connect(null)(SearchBar);
