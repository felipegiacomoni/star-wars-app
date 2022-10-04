import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import '../styles/Details.css'

const Details = props => {
    //read the state props from the previous useNavigate
    let location = useLocation();
    let details = location.state

    return (
        <div className="details-div">
            <h1 className="details-name">{details.name}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return { details: state.details }
}

export default connect(mapStateToProps)(Details);