import './about.css';
import BigLogo from './big-logo';
import {Link} from 'react-router-dom';

export default function About({darkModeOn, ViewProject}) {
  return (
    <div className="about--wrap" id="about">

      <img className="pattern" src="./assets/black_cat.png"></img>


      <div className="about--text--wrap" id={darkModeOn ? 'about--dark' : ''}>
        <p className="about--text">

          {' '}
          <b className='name'>Julian Bektashi</b> is an experienced designer working with brand identity, digital and print design, and 3D visualisation.
          He has worked for Clementoni, an international education toys company, producing over 300 product packages that supported global sales and retail growth, including work featured in the London Science Museum.
          {' '}
        </p>

        <p className="about--text">
          {' '}
          {' '}
          More recently, he led brand and marketing design for mywage, a London payroll tech startup, 
          and directed a complete rebrand for UKAP Foundation, an educational charity.

        </p>

        <p className="about--text">
          {' '}

          His architecture background (MSc with Distinction, BSc First Class Honours) informs a systems-based approach to 
          design, building scalable brand identities and digital experiences with deep technical understanding 
          of web development.

        </p>

        {/* <jb>
            <Link
              to="/julian-bektashi"
              style={{textDecoration: 'none', color: 'inherit'}}
            >
              <b>Julian Bektashi</b>
            </Link>
            <span className="tooltip">
              <Tooltip content={'AboutJulianBektashi'} />
            </span>
          </jb>
        
        
        
        
        <p className="about--text">
          It approaches <ev>design thinking <span className="tooltip">
              <Tooltip content={"DesignThinking"} />
            </span></ev>
          with an open mind and by
          <ev>cross-pollinating ideas <span className="tooltip">
              <Tooltip content={"ideas"} />
            </span></ev> and concepts while always taking into
          consideration the broader <ev>cultural context <span className="tooltip">
              <Tooltip content={"CulturalContext"} />
            </span></ev> and the limits and
          opportunities offered by the <ev>latest technologies <span className="tooltip">
              <Tooltip content={"LatestTechnologies"} />
            </span></ev>.
  </p>*/}

        {/*<p className="about--text">
          Different crafts and tools are often blended to{" "}
          <ev>serve the end result <span className="tooltip">
              <Tooltip content={"EndResult"} />
            </span></ev>, as part of a seamless, —brace yourself
          for another buzzword— <ev>holistic process! <span className="tooltip">
              <Tooltip content={"HolisticProcess"} />
            </span></ev> Based on the
          requirements of each project, <ev>3D imagery <span className="tooltip">
              <Tooltip content={"3D"} />
            </span></ev> and effects often
          meet <ev>graphic design <span className="tooltip">
              <Tooltip content={"GraphicDesign"} />
            </span></ev>, Ai stuff meets <ev>hand-made stuff <span className="tooltip">
              <Tooltip content={"HandMadeStuff"} />
            </span></ev>, typography meets
          <ev>Ai stuff <span className="tooltip">
              <Tooltip content={"AiStuff"} />
            </span></ev>, and <ev>semiotics <span className="tooltip">
              <Tooltip content={"Semiotics"} />
            </span></ev> meet 3D imagery again. On the other hand, when
          it comes to <ev>digital products <span className="tooltip">
              <Tooltip content={"DigitalProducts"} />
            </span></ev>, based on well established taxonomic conventions,  Julian Bektashi falls under the category of a
          <ev>unicorn <span className="tooltip">
              <Tooltip content={"Unicorn"} />
            </span></ev>.
  </p>*/}

        {/*<p className="about--text">
          Joscoyne prides itself
          for its <ev>honesty<span className="tooltip">
              <Tooltip content={"Honesty"} />
            </span></ev>, and strives for nothing less than the
          <ev>highest standards <span className="tooltip">
              <Tooltip content={"HighestStandards"} />
            </span></ev> the industry can offer. Come on then! Give it a
          chance! “We” are always on the look to form fruitful and possibly
          <ev>long term relationships <span className="tooltip">
              <Tooltip content={"LongTerm"} />
            </span></ev> with new clients!
</p>*/}
      </div>
    </div>
  );
}
