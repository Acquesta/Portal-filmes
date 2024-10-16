import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";
export default function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=be713c0f3820693d5b8eb83566bbe6cc&language=pt-br')
        .then(results => results.json())
        .then(data => setFilmes(data.results))
        .catch(error => console.log(error))
        .finally(() => console.log("Fechou"))

        console.log(filmes);
    }, [])



    return (
        <>
            <CardContainer titulo="Filmes antigos">
                {
                    
                    filmes.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))
                }
            </CardContainer>

        </>
    )
}