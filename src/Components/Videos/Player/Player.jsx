import React from "react";
import "./Player.css"


export default function () {
    return (
        <div>
            <iframe width={800} height={600} 
            src="https://www.youtube.com/embed/ai1zmNO5Z3E" 
            title="YouTube video player" 
            frameBorder={0} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </div>

    )

    

}