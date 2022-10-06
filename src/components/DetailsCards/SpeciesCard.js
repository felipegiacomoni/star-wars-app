import React from "react";

const SpeciesCard = ({ item }) => {
    return(
        <div>
            <h3>Classification: {item.classification}</h3>
            <h3>Language: {item.language}</h3>
            <h3>Skin Colors: {item.skin_colors}</h3>
            <h3>Hair Colors: {item.hair_colors}</h3>
            <h3>Eye Colors: {item.eye_colors}</h3>
            <h3>Average Height: {item.average_height}</h3>
            <h3>Average Lifespan: {item.average_lifespan}</h3>
        </div>
    )
}

export default SpeciesCard;