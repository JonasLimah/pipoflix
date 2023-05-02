import React from "react";
import Style from './style.module.css'

type Props ={
    title : string
}
export const Btn=({title}:Props)=>{
    return(
        <div className={Style.container}>
            <button className={Style.btn}>{title}</button>
        </div>
    );
}