import React from "react";
import '../../styles/Details.css'
import Loader from "../Loader";

const FilmCard = ({films, onFilmClick, name, showError}) => {

    const getRenderedList = films.map(film => {
        return(
            <h3 key={film.title} onClick={() => onFilmClick(film)}>{film.title}</h3>
        )
    })

    if(showError){
        return (
            <div className="ui right floated segment details-card">
                <div className="details-div">
                    <h2 className="film-card-title">{name} doesn't appear in any movies</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="ui right floated segment details-card">
            <div className="details-div">
                <h2 className="film-card-title">Choose a movie with {name}</h2>
                <div className="details-films">
                    {films.length > 0 ? getRenderedList : <Loader/>}
                </div>
            </div>
        </div>
    )
}

export default FilmCard;