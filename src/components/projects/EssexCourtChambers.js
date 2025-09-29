import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function EssexCourt () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/essex_court_chambers_stand.jpg"}
            alt="Essex Court Chambers Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}