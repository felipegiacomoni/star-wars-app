import React from "react";
import { connect } from "react-redux";
import "../styles/ListResult.css";
import Card from "./Card";
import Pagination from "./Pagination";

const ListResult = props => {

    const filteredList = props.results.filter(e => e.name.toUpperCase().indexOf(props.searchTerm.toUpperCase()) > -1)
    const renderedList = filteredList.map(result => {
        return(
            <div key={result.name} className="four wide column">
                <Card item={result} />
            </div>
        )
    });

    if(renderedList.length === 0){
        return (
            <div className="div-no-results">
                No results
            </div>    
        )
    }

    return (
        <div>
            <div className="ui grid">{renderedList}</div>
            <Pagination category={props.category} next={props.next} previous={props.previous}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        results: state.results.results, 
        category: state.category, 
        next: state.results.next,
        previous: state.results.previous
    }
}

export default connect(mapStateToProps)(ListResult);