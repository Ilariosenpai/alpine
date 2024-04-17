import React from "react";
import "./accueil.css";
import alpine from "../../Alpine-A110-1.jpg";
import Presentation from "../../sources-homepage/A110/Presentation_desktop-1.png";







const Acc = () => {
    return (

        <div>
        <div>
            <video src="headervid.mp4"  
            
            autoPlay
            loop
            muted
            
            />
            
        </div>
        <div className="container">

<div className="text">
        <h1>Alpine A110</h1>
        <p>La légende est de retour</p>
        </div>

        <div className="image">
        <img  src={alpine} />
      </div>

      </div>

      <div className="container">
    <div className="textbot">
        <h2>Qu'attendez vous ?</h2>

        <p>Configurez votre Alpine A110 dès maintenant</p>

        <a href='configurateur.js'> <button type="button" class="btn btn-outline-primary">Je configure mon A110</button> </a>
        </div>
<img  className="imgbot" src={Presentation} />




</div>



      </div>
        
       
    );
};

export default Acc;