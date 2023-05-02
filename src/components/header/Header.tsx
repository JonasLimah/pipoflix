import React from "react";
import Style from "./style.module.css"

export const Header=()=>{
    return(
        <header className={Style.container}>
            <div className={Style.logoArea}>
                <a href="#">
                    <img src="../src/assets/Pipo.png" alt="logo" width={100}/>
                </a>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}