import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/CloseButton.css'

const CloseButton = ({url, callback}) => {

    const navigate = useNavigate();

    const onButtonClick = () => {
        if(url){
            navigate(url);
        } else if(callback){
            callback();
        }
    }

    return (
        <label className="close-button" onClick={onButtonClick}>Close X</label>
    )
}

export default CloseButton;