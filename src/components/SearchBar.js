import React, { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";
import '../styles/SearchBar.css';
import { connect } from "react-redux";
import { categories } from "../utils/Constants";
import { isMobile } from "react-device-detect";
import Dropdown from "./Dropdown";
import { fetchResults } from '../actions'

const SearchBar = props => {

    const [selected, setSelected] = useState(props.category)
    const [term, setTerm] = useState('')

    useEffect(() => {
        const _timeoutId = setTimeout(() => {
            //term != resultTerm avoids to reload the list when the user come back from detail screen
            if(props.category && term !== props.resultTerm){
                props.fetchResults(props.category, term, '');
            }
        }, 500);

        return () => {
            clearTimeout(_timeoutId);
        }
    }, [term, props])

    //get the term from the store and set in the state, so the search term appears in the screen when the user go backs from the detail screen
    useEffect(() => {
        setTerm(props.resultTerm)
    }, [props.resultTerm])
     
    const getButtons = () => {
        return(
            categories.map(cat => {
                return <CategoryButton term={term} key={cat.param} category={cat}/>
            })
        )
    }

    const onDropdownSelect = item => {
        setSelected(item)
        props.fetchResults(item, term, '');
    }

    return (
        <div className="ui segment search-bar search-bar-background ">
            <form className="ui form form-search-bar" onSubmit={e => e.preventDefault()}>
                <div className="field div-search-bar">
                    <input value={term} type="text" placeholder="Search..." onChange={e => setTerm(e.target.value)} className="input-search-bar"/>
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
    return { category: state.category, resultTerm: state.results.term }
}

export default connect(mapStateToProps, {fetchResults})(SearchBar);
