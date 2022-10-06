import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import '../styles/Details.css'
import starWars from "../apis/starWars";
import OpeningCrawl from "./OpeningCrawl";
import PlanetCard from './DetailsCards/PlanetCard'
import FilmCard from "./DetailsCards/FilmCard";
import PeopleCard from "./DetailsCards/PeopleCard";
import SpeciesCard from "./DetailsCards/SpeciesCard";
import StarshipsCard from "./DetailsCards/StarshipsCard";
import VehiclesCard from "./DetailsCards/VehiclesCard";

const Details = props => {
    //read the state props from the previous useNavigate
    let location = useLocation();
    let details = location.state

    const [films, setFilms] = useState([])
    const [selectedFilm, setSelectedFilm] = useState(null)
    
    //TODO include memoize
    useEffect(() => {
        const _fetchFilms = async () => {
            let _films = []
            await Promise.all(
                details.films.map(async film => {
                    const response = await starWars.get(film);
                    _films.push(response.data) 
                })
            )
            setFilms(_films)
        }
        _fetchFilms()
    }, [details.films])

    const onFilmClick = film => {
        setSelectedFilm(film)
        setTimeout(() => {
            setSelectedFilm(null);
        }, 50000)
    }

    const getCardByCategory = () => {
        switch (props.category.label){
            case 'People': return <PeopleCard item={details}/>
            case 'Planets': return <PlanetCard item={details}/>
            case 'Species': return <SpeciesCard item={details}/>
            case 'Starships': return <StarshipsCard item={details}/>
            case 'Vehicles': return <VehiclesCard item={details}/>
            default: return null
        } 
    }

    if(selectedFilm){
        return(
            <OpeningCrawl film={selectedFilm}/>
        )
    }

    return (
        <div className="details-main-div">
            <div className="details-name-div">
                <h1 className="details-name">{details.name}</h1>
            </div>
            <br/>
            <div className="ui left floated segment details-card">
                <div className="details-div">
                    {getCardByCategory()}
                </div>
            </div>
            <FilmCard films={films} onFilmClick={onFilmClick} name={details.name}/>
        </div>
    )
    
}

const mapStateToProps = state => {
    return { details: state.details, category: state.category }
}

export default connect(mapStateToProps)(Details);