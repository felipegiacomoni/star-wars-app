import React from "react";
import { connect } from "react-redux";
import "../styles/ListResult.css";
import Card from "./Card";

const ListResult = props => {
   
    const filteredList = props.results.filter(e => e.name.toUpperCase().indexOf(props.searchTerm.toUpperCase()) > -1)
    const renderedList = filteredList.map(result => {
        return(
            <div className="four wide column">
                <Card key={result.name} item={result} />
            </div>
        )
    });

    return (
        <div className="ui grid">{renderedList}</div>
    )
}

const mapStateToProps = state => {
    return {results: state.results, category: state.category}
}

export default connect(mapStateToProps)(ListResult);