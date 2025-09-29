import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function ThreeHareCourt () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/3_Hare_Court_Ad.jpg"}
            alt="3 Hare Court Chambers Poster"
            className="poster-image"
          />

        </div>
      </div>
    );
}