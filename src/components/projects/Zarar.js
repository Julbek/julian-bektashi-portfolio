import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function Zarar() {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/zarar_poster.jpg"}
            alt="Zarar Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}