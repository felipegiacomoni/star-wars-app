import React from "react";
import '../../styles/Details.css'
import Loader from "../Loader";

const FilmCard = ({films, onFilmClick, name}) => {

    const getRenderedList = films.map(film => {
        return(
            <h3 key={film.title} onClick={() => onFilmClick(film)}>{film.title}</h3>
        )
    })

    return (
        <div className="ui right floated segment details-card">
            <div className="details-div">
                <h2 className="film-card-title">Choose a movie from {name}</h2>
                <div className="details-films">
                    {films.length > 0 ? getRenderedList : <Loader/>}
                </div>
            </div>
        </div>
    )
}

export default FilmCard;