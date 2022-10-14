import React from "react";
import { connect } from "react-redux";
import "../styles/ListResult.css";
import Card from "./Card";
import Pagination from "./Pagination";
import Loader from "./Loader";
import { isMobile } from "react-device-detect";

const ListResult = props => {

    const renderedList = props.results.map(result => {
        return(
            <div key={result.name} className={`${isMobile ? 'eight' : 'four'} wide column`}>
                <Card item={result} />
            </div>
        )
    });

    if(props.isLoading){
        return (
            <div className="list-result-loader">
                <Loader />
            </div>
        )
    }

    if(renderedList.length === 0){
        return (
            <div className="div-no-results">
                {props.category != '' ? 'No results' : 'Select a category'}
            </div>    
        )
    }

    return (
        <div>
            <div className="ui grid">{renderedList}</div>
            <Pagination category={props.category} searchTerm={props.searchTerm} next={props.next} previous={props.previous}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        results: state.results.results, 
        category: state.category, 
        next: state.results.next,
        previous: state.results.previous,
        isLoading: state.results.isLoading
    }
}

export default connect(mapStateToProps)(ListResult);