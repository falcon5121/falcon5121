import React from "react";
import "./Videos.css"
import Player from "./Player/Player"


export default function () {
    return (
        <div className="txt" id="video">
            <h1>VIDEOS</h1>
            <div>
                <Player/>
            </div>
        </div>
    )
}