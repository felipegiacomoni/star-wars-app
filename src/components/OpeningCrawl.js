import React from "react";
import '../styles/OpeningCrawl.css'
import CloseButton from "./CloseButton";

const OpeningCrawl = props => {
    window.scrollTo(0,0);

    return (
        <React.Fragment>
            <CloseButton callback={props.callback}/>
            <div className="main-div-crawl">
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
        </React.Fragment>
        
    )
}

export default OpeningCrawl;