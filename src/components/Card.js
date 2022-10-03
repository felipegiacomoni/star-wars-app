import React from "react";
import { connect } from 'react-redux';
import '../styles/Card.css';

const Card = props => {
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
                <div className="ui bottom attached button">
                <i className="add icon"></i>
                    See Details
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { category: state.category }
}

export default connect(mapStateToProps)(Card);