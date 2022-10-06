import React from "react";

const PlanetCard = ({ item }) => {
    return(
        <div>
            <h3>Population: {item.population}</h3>
            <h3>Terrain: {item.terrain}</h3>
            <h3>Diameter: {item.diameter}</h3>
            <h3>Cllimate: {item.climate}</h3>
            <h3>Orbital Period: {item.orbital_period}</h3>
            <h3>Gravity: {item.gravity}</h3>
        </div>
    )
}

export default PlanetCard;