import React from "react";
import '../styles/CategoryButton.css'

const CategoryButton = ({ category }) => {
    const onButtonClick = event => {
        console.log(category.param)
        event.preventDefault();
    }

    return (
        <button className="ui button" onClick={onButtonClick}>{category.label}</button>
    )
}

export default CategoryButton;