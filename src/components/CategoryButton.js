import React from "react";
import '../styles/CategoryButton.css';
import { connect } from 'react-redux';
import { fetchResults, setTerm } from "../actions";

const CategoryButton = props => {
    const onButtonClick = event => {
        props.fetchResults(props.category, props.term, '');
        event.preventDefault();
    }

    return (
        <button className={`ui button ${props.categorySelected === props.category ? 'active' : ''}`} onClick={onButtonClick}>{props.category.label}</button>
    )
}

const mapStateToProps = state => {
    return { categorySelected: state.search.category }
}

export default connect(mapStateToProps, {fetchResults, setTerm})(CategoryButton);