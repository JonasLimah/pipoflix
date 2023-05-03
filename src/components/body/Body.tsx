import { useEffect, useState } from "react";
import { Btn } from "../btn/Btn";
import Style from './style.module.css'
import { Movies } from "./typeApi";
import { Spinner } from "../spinner/spinner";



const TopMoviesUrl ="https://api.themoviedb.org/3/movie/top_rated?api_key=c3cbb93097d513bc7bcdfaa22d0aa960"
const image = "https://image.tmdb.org/t/p/w500/"


export const Body=()=>{
    const [movie,setMovie] = useState<Movies[]> ([])
    const [showMovie,setShowMovie] = useState(false)
    const [loading,setLoading]=useState(false)

    const getMovies=async()=>{
          setLoading(true)
        const res = await fetch(TopMoviesUrl);
        const data = await res.json();
        setMovie(data.results)
        setLoading(false)
        setShowMovie(true)  
}
   
    return(
        <div>
            <main className={Style.container}>
              
                {loading &&
                    <div className={Style.loading}>
                        <Spinner/>
                    </div>  
                }
                {showMovie && !loading &&
                <>
                    <div className={Style.containerMovies}>
                        <div className={Style.areaInput}>
                            <input type="text" className={Style.input} placeholder="Buscar Filme" />
                            <button onClick={()=>{}} className={Style.Btn} >B</button>
                        </div>
                  
                        <div className={Style.movieContianer}>
                        {movie.map((item,index)=>(
                            <div key={index} className={Style.areaMovie}>
                            <h1 className={Style.titleMovie}>{item.title}</h1>
                            <img src= {`${image}${item.poster_path}`} alt="imagem" className={Style.avataMovie} />
                            <h3>{item.original_language}</h3>
                            <div className={Style.containerRated}>
                                <p className={Style.titleRated}>{item.vote_average}</p>
                                <p className={Style.titleRated}>{item.popularity}</p>
                            </div>
                            <h2 className={Style.titleRated}>Lançamento Ano {item.release_date}</h2>
                        </div>
                        ))}
                        </div>
                     </div>
                 </>
                }
                {!showMovie && !loading &&
                <>
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
                        
                        <Btn title="Buscar" onclick={()=>{getMovies()}}/>
                        <div className={Style.areaSearchInfo}>
                            <p> Ao clicar você terá acesso as melhores informações sobre os filmes mais
                                assistidos ,tendo acesso ao elenco e muito mais.
                            </p>
                            <p> Lembrando esse conteudo você não ira asistir. servirá apenas como sinopse e tirar duvidas!
                            </p>
                        </div>
                    </div>
                </div>
                </>
                }
            </main>
        </div>
    );
}