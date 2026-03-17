
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function PhaseCraft () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/phasecraft_poster.webp"}
            alt="Phasecraft Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}


