import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Menu from "./Menu/Menu"

export default function () {
    return (
    <div className="vetor">
             <nav className="navbar">
                <ul>
                    <li><img src="./src/imagens/Paraibrass_logo.svg" alt="Logo do Paraibrass"/></li>
                    <li id="space"></li>
                    <li>Home</li>
                    <li>Biography</li>
                    <li>Videos</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li id="space"></li>
                    <li><SearchIcon className="search" /></li>
                    <li><Menu/></li>
                </ul>
             </nav>
            <img src="/src/imagens/Portfolio Paraibrass.svg" alt="" className="img"/>
            <section className="container">
            <img src="/src/imagens/Foto e Texto.svg" alt="Foto do Sexteto Paraibrass" className="Sexteto"/>
            </section>
    </div>
    )
}