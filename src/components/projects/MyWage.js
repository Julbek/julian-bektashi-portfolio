import "./project-components/presentation-box.css"
import "./poster-container.css"



export default function MyWage () {

    return (
      <div
        className="presentation--wrap">
  

        <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mywage_0.jpg"}
            alt="3 Hare Court Chambers Poster"
            className="poster-image"
          />

        </div>
         <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mywage_1.gif"}
            alt="3 Hare Court Chambers Poster"
            className="poster-image"
          />

        </div>
         <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mywage_3.gif"}
            alt="3 Hare Court Chambers Poster"
            className="poster-image"
          />

        </div>
         <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mywage_4.gif"}
            alt="3 Hare Court Chambers Poster"
            className="poster-image"
          />

        </div>
         <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mywage_5.jpg"}
            alt="3 Hare Court Chambers Poster"
            className="poster-image"
          />

        </div>
         <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mywage_6.gif"}
            alt="3 Hare Court Chambers Poster"
            className="poster-image"
          />

        </div>
         <div className="poster-container">
          <img 
            src={process.env.PUBLIC_URL + "/betsu-projects/mywage_7.gif"}
            alt="3 Hare Court Chambers Poster"
            className="poster-image"
          />

        </div>
         <div className="poster-container">

        </div>
      </div>
    );
}