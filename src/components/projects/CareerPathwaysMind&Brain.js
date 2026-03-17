import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function MindBrain () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/mind_brain_poster.webp"}
            alt="Koneqtiva Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}


