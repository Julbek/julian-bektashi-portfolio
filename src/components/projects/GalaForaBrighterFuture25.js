import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function Gala25 () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/ukap_gala_25_poster.webp"}
            alt="Koneqtiva Poster"
            className="poster-image"
          />

        </div>

        
        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/ukap_gala_25_collateral.webp"}
            alt="Koneqtiva Poster"
            className="poster-image"
          />

        </div>

        
        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/ukap_gala_25_trifold.webp"}
            alt="Koneqtiva Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}


