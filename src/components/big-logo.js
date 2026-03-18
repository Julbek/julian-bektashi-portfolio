import "./big-logo.css"
import React from "react"



export default function BigLogo({darkModeOn}) {

    let [animationSuffix, setAnimationSuffix] = React.useState("")
    let [bigLogoMode, setBigLogoMode] = React.useState("logo--light")



    React.useEffect(()=>{
        return darkModeOn===true? setBigLogoMode("logo--dark"): setBigLogoMode("logo--light");
    })
    
    
    function Expand() {
        setAnimationSuffix("--trans")
    }

    function contract() {
        setAnimationSuffix("")
    }


    return (
        <div className="big--logo--wrap" id={bigLogoMode}>

            <div className="big--logo--img--wrap">
                <img className="big--logo--img" src="./assets/julian_bektashi_headshot.jpg"  ></img>
                
            </div>
            
        </div>
    )
}





