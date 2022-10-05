import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/OpeningCrawl.css'

const OpeningCrawl = props => {

    let location = useLocation();
    let film = location.state

    return (
        <div>
            <div className="fade"></div>
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                    <p>Episode {props.film.episode_id}</p>
                    <h1>{props.film.title}</h1>
                    </div>
                    <p>{props.film.opening_crawl}</p> 
                </div>
            </section>
        </div>
    )
}

export default OpeningCrawl;