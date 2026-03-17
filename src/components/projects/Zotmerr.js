import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function Zotmerr () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img loading="lazy" 
            src={process.env.PUBLIC_URL + "/betsu-projects/zotmerr_poster.webp"}
            alt="Zotmerr Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}


