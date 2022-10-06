import React from "react";

const VehiclesCard = ({ item }) => {
    return(
        <div>
            <h3>Model: {item.model}</h3>
            <h3>Cargo Capacity: {item.cargo_capacity}</h3>
            <h3>Crew: {item.crew}</h3>
            <h3>Passengers: {item.passengers}</h3>
            <h3>Manufacturer: {item.manufacturer}</h3>
            <h3>Length: {item.length}</h3>
            <h3>Consumables: {item.consumables}</h3>
        </div>
    )
}

export default VehiclesCard;