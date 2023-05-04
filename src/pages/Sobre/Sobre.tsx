import Style from './style.module.css'
import { Btn } from '../../components/btn/Btn';
import {Link} from 'react-router-dom'
export const Sobre=()=>{
    return(
        <div className={Style.container}>
           <div className={Style.areaInfo}>
            <div></div>
            <div className={Style.firstP}>
                <p >Esse projeto  é baseado em uma experiência agradável, em que o usuário tem acesso exclusivo 
                    a uma fonte de filmes <span className={Style.Span}>Top Ranked</span> diversificado. tendo em vista que esse site não
                    dar direito ao usuário assistir os filmes, porém ele terá acesso as informações como <span className={Style.Span}>"Sinopse,Rated,Elenco e muito mais..."</span> 
                    
                </p>
            </div>
            <div>
                <Link to="/"><Btn title='Ir para Home'/></Link>
                
            </div>
           </div>
           <div className={Style.rightSide}>
                
           </div>
        </div>
    );
}