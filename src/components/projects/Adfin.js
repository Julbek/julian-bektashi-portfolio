import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function Adin() {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/Adfin_Ad.jpg"}
            alt="Adfin Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}