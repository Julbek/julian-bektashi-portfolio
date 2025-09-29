import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function BetsuWorks () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/betsu_poster.jpg"}
            alt="Betsu Works Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}