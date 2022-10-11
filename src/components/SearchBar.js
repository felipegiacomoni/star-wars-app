import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import '../styles/SearchBar.css';
import { connect } from "react-redux";
import { categories } from "../utils/Constants";
import { isMobile } from "react-device-detect";
import Dropdown from "./Dropdown";
import { fetchResults } from '../actions'

const SearchBar = props => {

    const [selected, setSelected] = useState(null)
     
    const getButtons = () => {
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

    const onDropdownSelect = item => {
        setSelected(item)
        props.fetchResults(item, '');
    }

    return (
        <div className="ui segment search-bar search-bar-background ">
            <form className="ui form form-search-bar" onSubmit={onFormSubmit}>
                <div className="field div-search-bar">
                    <input type="text" placeholder="Filter on this page..." onChange={onInputChange} className="input-search-bar"/>
                </div>
            </form>
            <div className="ui buttons div-category-select">
                {isMobile ? 
                    <Dropdown defaultLabel="Select a category"
                        options={categories}
                        selected={selected}
                        onSelectedChange={onDropdownSelect}/> 
                    : getButtons()}
            </div>
        </div>
    )
}

export default connect(null, {fetchResults})(SearchBar);
