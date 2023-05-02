import React from "react";
import { Btn } from "../btn/Btn";
import Style from './style.module.css'
export const Body=()=>{
    return(
        <body>
            <main className={Style.container}>
                <div className={Style.firstSide}>
                    <div className={Style.info}>
                        <div>
                            <span>Para
                           
                             </span>
                             <p> ter acesso completo á lista dos melhores filmes,
                                clique no Botão ao Lado!
                            </p>
                        </div>
                
                        <img src="../src/assets/imgFirstSide.png" alt="" width={300} />
                    </div>
                </div>
                <div  className={Style.secondSide}>
                    <div className={Style.areaSearch}>
                        
                        <Btn title="Buscar" />
                        <div className={Style.areaSearchInfo}>
                            <p> Ao clicar você terá acesso as melhores informações sobre os filmes mais
                                assistidos ,tendo acesso ao elenco e muito mais.
                            </p>
                            <p> Lembrando esse conteudo você não ira asistir. servirá apenas como sinopse e tirar duvidas!
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    );
}