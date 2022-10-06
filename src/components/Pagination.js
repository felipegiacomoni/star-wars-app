import React from "react";
import '../styles/Pagination.css';
import { connect } from 'react-redux';
import { fetchResults } from "../actions";

const Pagination = props => {

    const getRequestedPage = url => {
        return url.split("?")[1]
    }

    const onButtonClick = url => {
        props.fetchResults(props.category,'/?' + getRequestedPage(url));
    }

    if(props.pagination === null || props.pagination === undefined){
        return null;
    }

    return (
        <div className="pagination-main-div">
            <div className="ui buttons">
                <button 
                    onClick={() => onButtonClick(props.pagination.previous)} 
                    className={`ui labeled icon button ${props.pagination.previous === null ? 'disabled' : ''}`}
                >
                    <i className="left chevron icon"></i>
                    Previous
                </button>
                <button 
                    onClick={() => onButtonClick(props.pagination.next)} 
                    className={`ui right labeled icon button ${props.pagination.next === null ? 'disabled' : ''}`}
                >
                    Next
                    <i className="right chevron icon"></i>
                </button>
            </div>
        </div>
    )
}


export default connect(null, {fetchResults})(Pagination);