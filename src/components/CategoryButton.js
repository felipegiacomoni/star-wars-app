import React from "react";
import '../styles/CategoryButton.css';
import { connect } from 'react-redux';
import { fetchResults } from "../actions";

const CategoryButton = props => {
    const onButtonClick = event => {
        props.fetchResults(props.category);
        event.preventDefault();
    }

    return (
        <button className="ui button" onClick={onButtonClick}>{props.category.label}</button>
    )
}

export default connect(null, {fetchResults})(CategoryButton);