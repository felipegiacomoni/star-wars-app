import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/BackButton.css'

const BackButton = ({url, callback}) => {

    const navigate = useNavigate();

    const onButtonClick = () => {
        if(url){
            navigate(url);
        } else if(callback){
            callback();
        }
    }

    return (
        <label className="back-button" onClick={onButtonClick}>Back</label>
    )
}

export default BackButton;