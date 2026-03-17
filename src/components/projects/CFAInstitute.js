import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function CFA () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/CFA_institute_poster.webp"}
            alt="CFA Institute Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}


