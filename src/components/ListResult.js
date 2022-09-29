import React from "react";
import { connect } from "react-redux";
import "../styles/ListResult.css";

const ListResult = props => {
    const renderedList = props.results.map(result => {
        return(
            <div>
                <div className="box-name">{result.name}</div>
                <br/>
            </div>
        )
    });

    return (
        <div className="divLength">{renderedList}</div>
    )
}

const mapStateToProps = state => {
    return {results: state.results}
}

export default connect(mapStateToProps)(ListResult);