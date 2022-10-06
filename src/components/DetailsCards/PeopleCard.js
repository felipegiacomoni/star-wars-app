import React from "react";

const PeopleCard = ({ item }) => {
    return(
        <div>
            <h3>Gender: {item.gender}</h3>
            <h3>Height: {item.height}</h3>
            <h3>Skin Color: {item.skin_color}</h3>
            <h3>Hair Color: {item.hair_color}</h3>
            <h3>Eye Color: {item.eye_color}</h3>
            <h3>Birth Year: {item.birth_year}</h3>
        </div>
    )
}

export default PeopleCard;