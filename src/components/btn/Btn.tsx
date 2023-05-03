import React from "react";
import Style from './style.module.css'

type Props ={
    title : string,
    onclick?:()=>void
}
export const Btn=({title,onclick}:Props)=>{
    return(
        <div className={Style.container}>
            <button className={Style.btn} onClick={onclick}>{title}</button>
        </div>
    );
}