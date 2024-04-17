import React from "react";
import "./bot.css";
import Presentation from "../../sources-homepage/A110/Presentation_desktop-1.png";


const Bot = () => {

    return (


<div className="container">
    <div className="textbot">
        <h2>Qu'attendez vous ?</h2>

        <p>Configurez votre Alpine A110 dès maintenant</p>

        <a href='configurateur.js'> <button type="button" class="btn btn-outline-primary">Je configure mon A110</button> </a>
        </div>
<img  className="imgbot" src={Presentation} />




</div>

    );

    };

export default Bot;