import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import '../styles/SearchBar.css';
import { connect } from "react-redux";
import { categories } from "../utils/Constants";
import { isMobile } from "react-device-detect";
import Dropdown from "./Dropdown";
import { fetchResults, setTerm } from '../actions'

const SearchBar = props => {

    const [selected, setSelected] = useState(props.category)
    const [timeoutId, setTimeoutId] = useState(0)

    const getButtons = () => {
        return(
            categories.map(cat => {
                return <CategoryButton term={props.term} key={cat.param} category={cat}/>
            })
        )
    }

    const onDropdownSelect = item => {
        setSelected(item)
        props.fetchResults(item, props.term, '');
    }

    const onInputChange = e => {
        props.setTerm(e.target.value)
        clearTimeout(timeoutId)
        const _timeoutId = setTimeout(() => {
            if(props.category){
                props.fetchResults(props.category, e.target.value, '');
            }
        }, 500);
        setTimeoutId(_timeoutId)
    }

    return (
        <div className="ui segment search-bar search-bar-background ">
            <form className="ui form form-search-bar" onSubmit={e => e.preventDefault()}>
                <div className="field div-search-bar">
                    <input value={props.term} type="text" placeholder="Search..." onChange={onInputChange} className="input-search-bar"/>
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

const mapStateToProps = state => {
    return { category: state.search.category, term: state.search.term }
}

export default connect(mapStateToProps, {fetchResults, setTerm})(SearchBar);
