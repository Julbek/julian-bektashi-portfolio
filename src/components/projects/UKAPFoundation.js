import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function Ukap () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/uka_branding_poster.png"}
            alt="Mektrin Motors Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}