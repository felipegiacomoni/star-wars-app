import React from "react";
import '../styles/Pagination.css';
import { connect } from 'react-redux';
import { fetchResults, setTerm } from "../actions";

const Pagination = props => {
    const getRequestedPage = url => {
        return url.split("?")[1]
    }

    const onButtonClick = url => {
        props.fetchResults(props.category, props.resultTerm, getRequestedPage(url))
        props.setTerm(props.resultTerm)
    }

    if(props.previous === null && props.next === null){
        return null
    }

    return (
        <div className="pagination-main-div">
            <div className="ui buttons">
                <button 
                    onClick={() => onButtonClick(props.previous)} 
                    className={`ui labeled icon button ${props.previous === null ? 'disabled' : ''}`}
                >
                    <i className="left chevron icon"></i>
                    Previous
                </button>
                <button 
                    onClick={() => onButtonClick(props.next)} 
                    className={`ui right labeled icon button ${props.next === null ? 'disabled' : ''}`}
                >
                    Next
                    <i className="right chevron icon"></i>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {resultTerm: state.search.term}
}

export default connect(mapStateToProps, {fetchResults, setTerm})(Pagination);