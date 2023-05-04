import React from "react";
import Style from "./style.module.css"
import { Link } from "react-router-dom";

export const Header=()=>{
    return(
        <header className={Style.container}>
            <div className={Style.logoArea}>
                <a href="/">
                    <img src="../src/assets/Pipo.png" alt="logo" width={100}/>
                </a>
            </div>
            <div>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/sobre">Sobre</Link></li>
                        <li> <Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}