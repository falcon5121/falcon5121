import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Menu from "./Menu/Menu"
import logo from "./imagens/Paraibrass_logo.svg"
import fundo from "./imagens/Portfolio Paraibrass.svg"
import sexteto from "./imagens/Foto e Texto.svg"


export default function () {
    return (
    <div className="vetor">
             <nav className="navbar">
                <ul>
                    <li><img src={ logo } alt="Logo do Paraibrass"/></li>
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
            <img src={ fundo } alt="" className="img"/>
            <section className="container">
            <img src={ sexteto } alt="Foto do Sexteto Paraibrass" className="Sexteto"/>
            </section>
    </div>
    )
}