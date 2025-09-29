
import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function Mondvalsen () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mondvalsen_poster_01.jpg"}
            alt="Mondvalsen Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}