import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function BetsuWorks () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/betsu_poster.webp"}
            alt="Betsu Works Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}


