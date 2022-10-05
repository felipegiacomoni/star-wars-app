import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/Details.css'
import starWars from "../apis/starWars";
import OpeningCrawl from "./OpeningCrawl";

const Details = props => {
    //read the state props from the previous useNavigate
    let location = useLocation();
    let details = location.state

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    
    //TODO include memoize
    useEffect(() => {
        (async () => {
            let _films = []
            await Promise.all(
                details.films.map(async film => {
                    const response = await starWars.get(film);
                    _films.push(response.data) 
                })
            )
            setFilms(_films)
        })()
    }, [])

    const onFilmClick = film => {
        setSelectedFilm(film)
        setTimeout(() => {
            setSelectedFilm(null);
        }, 60000)
    }

    const getRenderedList = films.map(film => {
        return(
            <div key={film.title} onClick={() => onFilmClick(film)}>{film.title}</div>
        )
    })

    if(selectedFilm){
        return(
            <OpeningCrawl film={selectedFilm}/>
        )
    }

    return (
        <div>
            <div className="details-div">
                <h1 className="details-name">{details.name}</h1>
            </div>
            <br/>
            <div className="ui right floated segment details-card">
                <div className="details-div">
                    <h3 className="details-films">{getRenderedList}</h3>
                </div>
            </div>
        </div>
    )
    
}

const mapStateToProps = state => {
    return { details: state.details}
}

export default connect(mapStateToProps)(Details);