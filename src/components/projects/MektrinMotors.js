import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function MektrinMotors () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mektrin_motors_poster.jpg"}
            alt="Mektrin Motors Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}