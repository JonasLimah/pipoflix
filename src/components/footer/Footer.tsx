import React from "react";
import Style from './style.module.css'

export const Footer=()=>{
    return(
       <footer className={Style.container}>
            <div className={Style.iconeFooter}> <a href="https://github.com/jonaslimah" target="_blank"><img src="../src/assets/github.png" alt="git" /></a> </div>
            <div className={Style.iconeFooter}> <a href="https://www.linkedin.com/in/jonaslimah/"  target="_blank"><img src="../src/assets/linkedin.png" alt="linkedin" /></a> </div>
            <div className={Style.iconeFooter}> <a href="#"><img src="../src/assets/email.png" alt="email" /></a> </div>
            <div><p> &copy;Jonas limah 	</p></div>
       </footer>
    );
}