import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function BetsuWorks () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/Latent_Labs_Ad.gif"}
            alt="Latent Labs Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}

