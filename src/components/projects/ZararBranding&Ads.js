import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function Zarar() {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/zarar_poster.webp"}
            alt="Zarar Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}


