import React, { useState } from "react";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import '../styles/Card.css';
import { fetchDetails } from "../actions";
import starWars from "../apis/starWars";

const Card = props => {

    const navigate = useNavigate();

    const onDetailsClick = async event => {
        const response = await starWars.get(props.item.url);
        navigate('/details', {state: response.data});
    }

    return (
        //<div className="box-name">{props.item.name}<br/></div>
        <div className="ui cards div-main-cards">
            <div className="card">
                <div className="content">
                <img 
                    alt={props.category.label}
                    className="right floated mini ui image" 
                    src={require(`../styles/${props.category.icon !== undefined ? props.category.icon : 'star_wars_logo.png'}`)}
                />
                <div className="header">{props.item.name}</div>
                <div className="description">
                    Appears in {props.item.films.length} movies
                </div>
                </div>
                <div className="ui bottom attached button" onClick={onDetailsClick}>
                    <i className="add icon"></i>
                    See Details
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { category: state.category, details: state.details }
}

export default connect(mapStateToProps, {fetchDetails})(Card);