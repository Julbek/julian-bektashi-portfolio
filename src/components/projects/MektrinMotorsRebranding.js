import React from "react"
import "./project-components/presentation-box.css"
import "./poster-container.css"

export default function MektrinMotors () {
  return (
    <div className="presentation--wrap">

      <div className="poster-container">
        <img loading="lazy"
          src={
            process.env.PUBLIC_URL + '/betsu-projects/mektrin_branding_00.webp'
          }
          alt="Mektrin Motors"
          className="poster-image"
        />

      </div>

      <div className="poster-container">
        <img loading="lazy"
          src={
            process.env.PUBLIC_URL + '/betsu-projects/mektrin_branding_01.webp'
          }
          alt="Mektrin Motors"
          className="poster-image"
        />

      </div>

      <div className="poster-container">
        <img loading="lazy"
          src={
            process.env.PUBLIC_URL + '/betsu-projects/mektrin_branding_02.webp'
          }
          alt="Mektrin Motors"
          className="poster-image"
        />

      </div>

      <div className="poster-container">
        <img loading="lazy"
          src={
            process.env.PUBLIC_URL + '/betsu-projects/mektrin_branding_03.webp'
          }
          alt="Mektrin Motors"
          className="poster-image"
        />

      </div>

      <div className="poster-container">
        <img loading="lazy"
          src={process.env.PUBLIC_URL + '/betsu-projects/mektrin_motors_ad.webp'}
          alt="Mektrin Motors"
          className="poster-image"
        />

      </div>

      <div className="poster-container">
        <img loading="lazy"
          src={
            process.env.PUBLIC_URL + '/betsu-projects/mektrin_branding_04.webp'
          }
          alt="Mektrin Motors"
          className="poster-image"
        />

      </div>

      <div className="poster-container">
        <img loading="lazy"
          src={
            process.env.PUBLIC_URL + '/betsu-projects/mektrin_branding_05.webp'
          }
          alt="Mektrin Motors"
          className="poster-image"
        />

      </div>

    </div>
  );
}


