import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function Adin() {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/Adfin_Ad.webp"}
            alt="Adfin Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}


