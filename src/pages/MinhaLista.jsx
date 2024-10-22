import { useEffect } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";

function MinhaLista() {

    let assistirMaisTarde = JSON.parse(localStorage.getItem("verDepois"))
    let assistidos = JSON.parse(localStorage.getItem("assistidos"))

    console.log(assistirMaisTarde);

    return ( 
        <>
            <CardContainer 
                titulo='Assistir mais tarde'
            >
                {
                    assistirMaisTarde.map(filme => (

                        <MovieCard
                            key={filme.id}
                            id={filme.id}
                            poster_path={filme.poster_path}
                        />
                    ))
                }
            </CardContainer>

            <CardContainer 
                titulo='Assistidos'
            >
                {
                    assistidos.map(filme => (

                        <MovieCard
                            key={filme.id}
                            id={filme.id}
                            poster_path={filme.poster_path}
                        />
                    ))
                }
            </CardContainer>
        </>
     );
}

export default MinhaLista;